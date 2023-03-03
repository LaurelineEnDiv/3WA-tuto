import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, useEffect, Fragment} from "react"
import {NavLink} from 'react-router-dom'

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
        .then(res => alert("modifications effectuées"))
        .catch(err => console.log(err))
    }
    
    return (
        <Fragment>
            { user && (
                <Fragment>
                <p>Modifier les coordonnées de l'utilisateur</p>
                <form onSubmit={submit}>
                    <input type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                    <input type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                    <input type='text' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                    <input type='submit' />
                </form>
                <p><NavLink to={`/editpassword/${user.id}`}>Modifier le mot de passe</NavLink></p>
                </Fragment>
            )}
        </Fragment>
    )
}

export default EditAdmin