import { NavLink } from "react-router-dom";
import {useEffect} from 'react'
import axios from 'axios'
const Nav = (props) => {
  
  // useEffect(() => {
  //   if(!axios.defaults.headers.common['Authorization']){
  //     const token = localStorage.getItem("jwtToken")
  //     if(token){
  //       axios.defaults.headers.common['Authorization'] = 'Bearer '+token
  //     }
  //   }
  // },[])
  
  return (
    <nav>
      <img src="">
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
          <NavLink to="/addshow">
           Ajouter un spectacle
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;