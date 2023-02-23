import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useEffect, useState} from "react"
import {NavLink} from 'react-router-dom'

const Admin = () => {
    const [usersList, setUsersList] = useState([])
    
    useEffect(() => {
        if(usersList.length === 0){
            axios.get(`${BASE_URL}/admin`)
                .then(res => setUsersList(res.data.result))
                .catch(err => console.log(err))
        }
    },[usersList])
    
    const deleteUser = (id) => {
        axios.post(`${BASE_URL}/deleteAdmin`,{id})
        .then(res => {
      console.log(res)
      // Mettre à jour la liste des utilisateurs en excluant l'utilisateur supprimé
      setUsersList(usersList.filter(user => user.id !== id))
    })
    .catch(err => console.log(err))
    }
    
    ///////ADD USER////////
    
    const initialValue = {
        nom:'',
        prenom:'',
        email:'',
        password:''
    }
    const [userData, setUserData] = useState(initialValue)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }
    
    const submit = (e) => {
        if(userData.nom === "" || userData.prenom === "" || userData.email === "" || userData.password === ""){
            console.log("Veuillez remplir tous les champs")
        }
        e.preventDefault()
        axios.post(`${BASE_URL}/addadmin`,{
          nom : userData.nom.trim(),
          prenom: userData.prenom.trim(),
          email: userData.email.trim(),
          password:userData.password.trim(),
          
      })
        .then(res => {
            console.log(res)
            alert(res.data.response)
        })
        setUserData(initialValue)
    }
    
    
    return(
        <div>
            <p>Liste des utilisateurs admin</p>
                <ul>
                  {usersList.map((user, i) => {
                    return (
                      <li key={i}>
                        <NavLink to={`/editadmin/${user.id}`}>
                          {user.nom} {user.prenom}
                        </NavLink>
                        <button onClick={() => deleteUser(user.id)}>X</button>
                      </li>
                    );
                  })}
                </ul>
            
            <div>
            
              <p>Ajouter un nouvel Admin</p>
              <form onSubmit={submit} method="post">
                <div>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    onChange={handleChange}
                    value={userData.nom}
                    maxLength="100"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    onChange={handleChange}
                    value={userData.prenom}
                    maxLength="100"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleChange}
                    value={userData.email}
                    maxLength="100"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    onChange={handleChange}
                    value={userData.password}
                    maxLength="250"
                  />
                </div>
                <button type="submit">VALIDER</button>
              </form>
            </div>
  </div>

    )     

    
}

export default Admin