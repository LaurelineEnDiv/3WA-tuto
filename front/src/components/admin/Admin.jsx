import axios from "axios"
import {BASE_URL} from '../../tools/constante.js'
import {useEffect, useState} from "react"
import {NavLink} from 'react-router-dom'


const Admin = () => {
    const [usersList, setUsersList] = useState([])
    

// Récupération de la liste des utilisateurs
    useEffect(() => {
        if(usersList.length === 0){
            axios.get(`${BASE_URL}/admin`)
                .then(res => {
                setUsersList(res.data.result)
                })
                .catch(err => console.log(err))
        }
    },[usersList])
    
////////////////DELETE USER//////////////
    const deleteUser = (id) => {
        axios.post(`${BASE_URL}/deleteAdmin`,{id})
        .then(res => {
      // Mettre à jour la liste des utilisateurs en excluant l'utilisateur supprimé
      setUsersList(usersList.filter(user => user.id !== id))
    })
    .catch(err => console.log(err))
    }
    
////////////////ADD USER///////////////////
    const initialValue = {
        nom:'',
        prenom:'',
        email:'',
        password:''
    }
    
    const [userData, setUserData] = useState(initialValue)
    const [newUser, setnewUser] = useState(false)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData,[name]:value})
    }
    
    const submit = (e) => {
        if(userData.nom === "" || userData.prenom === "" || userData.email === "" || userData.password === ""){
            alert("Veuillez remplir tous les champs")
        }
        e.preventDefault()
        const data = {
          nom : userData.nom.trim(),
          prenom: userData.prenom.trim(),
          email: userData.email.trim(),
          password:userData.password.trim(),
        }
      
        axios.post(`${BASE_URL}/addadmin`,data)
        .then(res => {
            alert(res.data.response)
            setnewUser(true)
        })
        .catch(err => console.log(err))
        setUserData(initialValue)
    }


useEffect(() => {
    if(newUser){
        axios.get(`${BASE_URL}/admin`)
        .then(res => {
            setUsersList(res.data.result)
        })
        .catch(err => console.log(err))
        setnewUser(false)
    }
},[newUser])
    
    
    
    return(
        <div className=" container admin-margin-top">
            <p>Modifier ou supprimer un administrateur</p>
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
            
              <p>Ajouter un nouvel administrateur</p>
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
                    placeholder="Mot de passe (8 caractères minimum)"
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