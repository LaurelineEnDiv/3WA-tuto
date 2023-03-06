import { NavLink } from "react-router-dom";
import img from "../assets/img/logo-Hommes_Sensibles.png";
import {useContext, Fragment} from "react"
import { StoreContext } from "../tools/context.js"

const Nav = (props) => {
      const [state] = useContext(StoreContext)

  
  return (
    <header className="fixed-top">
    <nav>
      <div className="navblack">
      <a href="/"><img src={img} alt='Les Hommes Sensibles - Logo'/></a>
      <ul className="navuser">
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
      </div>
      
        
        { state.user.isAdmin && (
        <Fragment>
        <div className="navyellow">
        <ul className="navadmin">
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
          <li>
            <NavLink to="/logout">
             Déconnexion
            </NavLink>
          </li>
        </ul>
        </div>
        </Fragment>
        )}
      </nav>
    </header>
  )
}

export default Nav;