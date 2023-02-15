import axios from "axios"
import {BASE_URL} from '../tools/constante.js'
import {useState} from "react"

const AddAdmin = () => {
    
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
            <h1>Ajouter un nouvel Admin</h1>
            <form onSubmit={submit} method="post">
                <div>
                    <input type="text" name="nom" placeholder="Nom" onChange={handleChange} value={userData.nom} maxLength="100"/>
                </div>
                <div>
                    <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange} value={userData.prenom} maxLength="100"/>
                </div>
                <div>
                    
                    <input type="email" name="email" placeholder="E-mail" onChange={handleChange} value={userData.email} maxLength="100"/>
                </div>
                <div >
                    
                    <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} value={userData.password} maxLength="250"/>
                </div>
                <button type="submit">VALIDER</button>
            </form>
        </div>
    )
}

export default AddAdmin