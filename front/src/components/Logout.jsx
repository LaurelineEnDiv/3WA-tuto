import {useEffect} from 'react' 
import axios from "axios"
const Logout = () => {
    
     useEffect(() => {
        localStorage.removeItem('jwtToken')
        delete axios.defaults.headers.common['Authorization']
    },[])
    
    return(
        <div>Vous êtes déconnecté</div> 
    )   
}

export default Logout