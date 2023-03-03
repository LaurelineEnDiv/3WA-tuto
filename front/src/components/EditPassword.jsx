import {useParams} from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import {useState, Fragment} from "react"

const EditPassword = () => {
    const { id } = useParams(); 
    const [newPassword, setNewPassword] = useState("");
    
      const submit = (e) => {
        e.preventDefault();

    axios
      .post(`${BASE_URL}/editAdminById`, { id, password: newPassword })
      .then((res) => alert("modification effectuée"))
      .catch((err) => console.log(err));
  };
    
    return (
                <Fragment>
                <p>Définissez votre nouveau mot de passe (8 caractères minimum)</p>
                <form onSubmit={submit}>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      maxLength="250"
                    />
                    <button type="submit">Valider</button>
                </form>
                </Fragment>
    )
}

export default EditPassword