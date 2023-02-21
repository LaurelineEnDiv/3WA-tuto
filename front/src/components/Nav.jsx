import { NavLink } from "react-router-dom";
import img from "../assets/img/logo-Hommes_Sensibles.png";
import {useContext, Fragment} from "react"
import { StoreContext } from "../tools/context.js"

const Nav = (props) => {
      const [state, dispatch] = useContext(StoreContext)

  
  
  return (
    <nav>
      <img src={img} alt='Les Hommes Sensibles - Logo'/>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/listshows">
            Spectacles
          </NavLink>
        </li>
        <li>
          <NavLink to="/listdates">
            Agenda
          </NavLink>
        </li>
      </ul>
      
      <ul>
        <li>
          <NavLink to="/login">
           Connexion
          </NavLink>
        </li>
        { state.user.isAdmin && (
        <Fragment>
          <li>
            <NavLink to="/addadmin">
             Ajouter un admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/addshow">
             Ajouter un spectacle
            </NavLink>
          </li>
          <li>
            <NavLink to="/adddate">
             Ajouter une date
            </NavLink>
          </li>
        </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Nav;