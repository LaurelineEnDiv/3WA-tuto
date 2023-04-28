import axios from "axios"
import { useState, useEffect, Fragment } from "react"
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../tools/constante.js'


const ManageTeam = () => {

    const initialState = {
        prenom: '',
        nom: '',
        role: '',
        mail: '',
        phone: '',
        photo: '',
    }
    const [teamList, setTeamList] = useState([])
    const [teamMemberData, setTeamMemberData] = useState(initialState)
    const [pictures, setPictures] = useState(null)

    useEffect(() => {
        if (teamList.length === 0) {
            axios.get(`${BASE_URL}/listteam`)
                .then(res => setTeamList(res.data.result))
                .catch(err => console.log(err))
        }
    }, [teamList])

    const deleteTeamMember = (id) => {
        console.log('id:', id); 
        axios.post(`${BASE_URL}/deleteTeamMember`, { id })
            .then(res => {
                // Mettre à jour la liste des équipes en excluant le membre supprimé
                setTeamList(teamList.filter(team => team.id !== id))
            })
            .catch(err => console.log(err))
    }

    ///////ADD TEAM MEMBER////////


    const handleChange = (e) => {
        const { name, value } = e.target
        setTeamMemberData({ ...teamMemberData, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()

        const dataFile = new FormData();
        const files = [...e.target.photo.files];
        
        // ajouter d'autre inputs au formulaire
        dataFile.append('prenom', teamMemberData.prenom)
        dataFile.append('nom', teamMemberData.nom)
        dataFile.append('role', teamMemberData.role)
        dataFile.append('mail', teamMemberData.mail)
        dataFile.append('phone', teamMemberData.phone)

        // ajouter tous les fichiers à FormData
        for (let i = 0; i < files.length; i++) {
            dataFile.append('files', files[i], files[i].name)
        }

        //mettre à jour l'état de l'application 
        axios.post(`${BASE_URL}/addteammember`, dataFile)
            .then((res) => {
                
                const data = {
                    id: res.data.result.insertId,
                    prenom: teamMemberData.prenom,
                    nom: teamMemberData.nom,
                    role: teamMemberData.role,
                    mail: teamMemberData.mail,
                    phone: teamMemberData.phone
                }
                
                setTeamList([...teamList, data])
                setTeamMemberData(initialState)
                setPictures(res.data.files)

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className=" container admin-margin-top">
            <h1>Gestion de l'équipe</h1>
             <h2>Modifier ou supprimer un membre</h2>
                <ul>
                  {teamList.map((team, i) => {
                    return (
                      <Fragment key={i}>
                          <li className="li-admin">
                            <NavLink to={`/editteammember/${team.id}`}>
                              {team.prenom} {team.nom}
                            </NavLink>
                            <button className="delete" onClick={() => deleteTeamMember(team.id)}>X</button>
                          </li>
                      </Fragment>
                    )
                  })}
                </ul>
        <div>
           
                <Fragment>
                    <h2>Ajouter un membre de l'équipage</h2>
                    <form onSubmit={submit} encType="multipart/form-data">
                    
                        <label>Prénom</label>
                        <input type='text' name='prenom' onChange={handleChange} value={teamMemberData.prenom} />
                        
                        <label>Nom</label>
                        <input type='text' name='nom' onChange={handleChange} value={teamMemberData.nom} />
                       
                        <label>Role</label>
                        <input type='text' name='role' onChange={handleChange} value={teamMemberData.role} />
                       
                        <label>Mail</label>
                        <input type='text' name='mail' onChange={handleChange} value={teamMemberData.mail} />
                       
                        <label>Téléphone</label>
                        <input type='text' name='phone' onChange={handleChange} value={teamMemberData.phone} />
                       
                        <div>
                            <label>Télécharger une photo de profil (500 Ko max)</label>
                            <input type='file' name='photo' multiple />
                        </div>
                        
                        <div>
                        <input className="button" type='submit' value='Valider'/>
                        </div>
                    </form>
                </Fragment>
            
            </div>
            </div>
    )
}

export default ManageTeam