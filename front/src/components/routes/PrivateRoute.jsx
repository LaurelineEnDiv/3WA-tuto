import { Navigate, useLocation } from "react-router-dom"
import { StoreContext } from "../../tools/context.js"
import { BASE_URL } from "../../tools/constante.js"
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'

const PrivateRoute = ({ children, auth = null }) => {
  // récupere le pathname ex: http://laurelineauger.ide.3wa.io:3000/login => /login
  const location = useLocation().pathname;
  const [loading, setLoading] = useState(true)
  // récupère user qui se trouve dans le state du reducer grâce au destructuring
  const [{ user }, dispatch] = useContext(StoreContext)

  useEffect(() => {
    // vérifie que l'utilisateur n'est pas déjà connecté
    if (user.id === null) {
      // récupère le token dans le localStorage
      const jwtToken = window.localStorage.getItem("jwtToken")
      // Si token
      if (jwtToken) {
        // on met le token 
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
        // vérifie le token puis sauvegarde les données dans le reducer
        axios.get(`${BASE_URL}/relogged`)
          .then(res => dispatch({ type: "LOGIN", payload: res.data.result }))
          .catch(e => console.log(e))
      }
      else { setLoading(false) }
    }
  }, [])

  // permet de bloquer le chargement des composants si l'utilisateur n'est pas logged
  useEffect(() => { if (user.id || !auth) setLoading(false) }, [user, location])

  // récupere les variables qui permettent de savoir si l'utilisateur est connecté et/ou admin
  const { isAdmin, isLogged } = user;

  // On vérifie si la route est réservée à l'admin 
  const isLimitedToAdmin = auth === "admin";
  // On vérifie si la route est réservée à l'utilisateur connecté
  const isLimitedToConnected = auth === "user";

  // s'il n'y a pas de restriction sur cette route
  const isPublic = auth === null

  /* 
   * Si la route est réservée aux admin et qu'il est connecté en tant qu'admin
   * OU
   * Si la route est réservée aux utilisateurs et qu'il est connecté
   */
  const isUserAuthorized = isPublic || (isLimitedToAdmin && isAdmin) || (isLimitedToConnected && isLogged);

  if (loading) return <p>Loading</p>

  return isUserAuthorized ? children : <Navigate to="/" />;
}


export default PrivateRoute