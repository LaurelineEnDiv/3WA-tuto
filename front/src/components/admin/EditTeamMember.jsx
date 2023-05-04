import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, BASE_IMG } from "../../tools/constante.js"
import { useState, useEffect, Fragment } from "react"

const EditTeamMember = () => {
    const { id } = useParams()
    const initialState = {
        nom: '',
        prenom: '',
        role: '',
        mail: '',
        phone: '',
    }
    const [teamMember, setTeamMember] = useState(initialState)

    useEffect(() => {
        axios.post(`${BASE_URL}/getTeamMemberById`, { id })
            .then(res => setTeamMember(res.data.result[0]))
            .catch(err => console.log(err))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setTeamMember({ ...teamMember, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post(`${BASE_URL}/editTeamMemberById`, teamMember)
            .then(res => alert("modification effectuée"))
            .catch((err) => console.log(err))
    }

    return (
        <div className=" container admin-margin-top">
        <Fragment>
            <h2>Modifier les informations du membre</h2>
                <form onSubmit={submit}>
                    <label>Prénom</label>
                    <input type='text' name='prenom' onChange={handleChange} value={teamMember.prenom} />
                    
                    <label>Nom</label>
                    <input type='text' name='nom' onChange={handleChange} value={teamMember.nom} />
                    
                    <label>Role</label>
                    <input type='text' name='role' onChange={handleChange} value={teamMember.role} />
                    
                    <label>Mail</label>
                    <input type='text' name='mail' onChange={handleChange} value={teamMember.mail} />
                    
                    <label>Téléphone</label>
                    <input type='text' name='phone' onChange={handleChange} value={teamMember.phone} />
                    
                    <div>
                        <input className="button" type='submit' value='Valider les modifications' />
                    </div>
                </form>
                
        </Fragment>
        </div>
    )
}

export default EditTeamMember
