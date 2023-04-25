import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../tools/constante.js"
import { useState, Fragment } from "react"

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
                <div className=" container admin-margin-top min-height">
                <p>Définissez votre nouveau mot de passe (8 caractères minimum)</p>
                <form onSubmit={submit}>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      maxLength="250"
                    />
                    <button className="button" type="submit">Valider</button>
                </form>
                </div>
                </Fragment>
  )
}

export default EditPassword