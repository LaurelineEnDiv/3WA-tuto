import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect, Fragment} from "react"

const EditAdmin = () => {
    const {id} = useParams()
    
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getAdminById`,{id})
            .then(res => setUser(res.data.result[0]))
            .catch(err => console.log(err))
    },[id])
    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    } 
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/editAdminById`,{...user})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    return (
        <Fragment>
            { user && (
                <form onSubmit={submit}>
                    <input type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                    <input type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                    <input type='text' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                    <input type='text' name='password' placeholder='password' onChange={handleChange} value={user.password} />
                    {/* <select onChange={null} value={null}>
                        <option value='6'>Admin</option>
                        <option value='5'>user</option>
                    </select>*/}
                    <input type='submit' />
                </form>
            )}
        </Fragment>
    )
}

export default EditAdmin