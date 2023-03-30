import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../../tools/constante.js"
import {useState, useEffect, Fragment} from "react"
import {NavLink} from 'react-router-dom'

const EditAdmin = () => {
    const {id} = useParams()
    
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        axios.post(`${BASE_URL}/getAdminById`,{id})
            .then(res => {
                const data = res.data.result[0]
                delete data.password
                setUser(data)
            })
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
        <div className=" container admin-margin-top">
            { user && (
                <Fragment>
                <h2>Modifier les coordonnées de l'utilisateur</h2>
                <form onSubmit={submit}>
                    <input type='text' name='nom' placeholder='nom' onChange={handleChange} value={user.nom} />
                    <input type='text' name='prenom' placeholder='prenom' onChange={handleChange} value={user.prenom} />
                    <input type='text' name='email' placeholder='email' onChange={handleChange} value={user.email} />
                    <input className="button-white" type='submit'value="Valider" />
                </form>
                <p>Pour modifier votre mot de passe, <NavLink to={`/editpassword/${user.id}`}>c'est par ici !</NavLink></p>
                </Fragment>
            )}
        </div>
        </Fragment>
    )
}

export default EditAdmin