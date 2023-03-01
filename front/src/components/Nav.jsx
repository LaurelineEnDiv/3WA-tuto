import { NavLink } from "react-router-dom";
import img from "../assets/img/logo-Hommes_Sensibles.png";
import {useContext, Fragment} from "react"
import { StoreContext } from "../tools/context.js"

const Nav = (props) => {
      const [state, dispatch] = useContext(StoreContext)

  
  return (
    <nav class="fixed-top">
      <a href="/"><img src={img} alt='Les Hommes Sensibles - Logo'/></a>
      <ul>
        <li>
          <NavLink to="/la-compagnie">
            Qui sommes-nous ?
          </NavLink>
        </li>
        <li>
          <NavLink to="/listshows">
             Les Projets
          </NavLink>
        </li>
        <li>
          <NavLink to="/listdates">
            Agenda
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
         <li>
          <NavLink to="/pro">
            Pro
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">
           Connexion
          </NavLink>
        </li>
      </ul>
        
        { state.user.isAdmin && (
        <Fragment>
        <ul class="navadmin">
          <li>
            <NavLink to="/logout">
             Déconnexion
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin">
             Gérer les utilisateurs
            </NavLink>
          </li>
          <li>
            <NavLink to="/manageshows">
             Gérer les spectacles
            </NavLink>
          </li>
          <li>
            <NavLink to="/managedates">
             Gérer les dates
            </NavLink>
          </li>
          <li>
            <NavLink to="/managepro">
             Gérer l'espace pro
            </NavLink>
          </li>
        </ul>
        </Fragment>
        )}
      
    </nav>
  )
}

export default Nav;