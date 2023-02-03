import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'
const Nav = (props) => {
  
  useEffect(() => {
    if(!axios.defaults.headers.common['Authorization']){
      const token = localStorage.getItem("jwtToken")
      if(token){
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
      }
    }
  },[])
  
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/listusers">
            Liste des utilisateurs
          </NavLink>
        </li>
        <li>
          <NavLink to="/addusers">
           Ajouter un utilisateur
          </NavLink>
        </li>
        <li>
          <NavLink to="/listarticles">
            Liste des articles
          </NavLink>
        </li>
        <li>
          <NavLink to="/addarticle">
            Ajouter un article
          </NavLink>
        </li>
        <li>
          <NavLink to="/listcomments">
            Liste des commentaires
          </NavLink>
        </li>
        <li>
          <NavLink to="/addcomment">
            Ajouter un commentaire
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
            Connexion
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;