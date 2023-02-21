import { useContext } from "react"
import { StoreContext } from "../tools/context.js"
import {useState} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import inputCheck from "../tools/inputLength.js"

const Login = () => {
    const [state, dispatch] = useContext(StoreContext)
    const initialState = {email:'',password:''}
    const [info, setInfo] = useState(initialState)
    
    const handleChange = (e) => {
        const {name,value} = e.target
         if(inputCheck(value)){
            setInfo({...info, [name]:value})
         }
    }
    
    const submit = (e) => {
        e.preventDefault()
         if(inputCheck(info.email) && inputCheck(info.password)){
            axios.post(`${BASE_URL}/login`,{password:info.password, email:info.email})
            .then(res => {
                if(res.data.response) {
                    dispatch({type:'LOGIN', payload:res.data.response}) // A TESTER
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    setInfo(initialState)
                }
            })
            .catch(e => console.log(e))
         }
    }
    
    
    return(
        <form onSubmit={submit}>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
            <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
            <input type="submit" />
        </form>
    )
}

export default Login