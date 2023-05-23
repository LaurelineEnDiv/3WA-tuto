import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { StoreContext } from "../tools/context.js"
import img from "../assets/img/logo-Hommes_Sensibles.png";

const Nav = (props) => {
  const [state] = useContext(StoreContext)

  return (
    <header>
      <nav className="navblack column">
        <a href="/"><img src={img} alt='Les Hommes Sensibles - Logo'/></a>
          <ul className="navuser column">
          <li>
              <NavLink to="/">
               Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/la-compagnie">
                La compagnie
              </NavLink>
            </li>
            <li>
              <NavLink to="/spectacles">
                 Les Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/agenda">
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
          </ul>
      </nav>
      
      { state.user.isAdmin && (
      <nav>  
        <ul className="navadmin">
          <li>
            <NavLink to="/admin">
             Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion-equipe">
             Team/Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion-textes">
             Textes
            </NavLink>
          </li>
           <li>
            <NavLink to="/gestion-partenaires">
             Partenaires
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion-spectacles">
             Spectacles
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion-agenda">
             Dates
            </NavLink>
          </li>
          <li>
            <NavLink to="/gestion-pro">
             Espace pro
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout">
             Déconnexion
            </NavLink>
          </li>
        </ul>
      </nav>  
      )}
    </header>
  )
}

export default Nav;