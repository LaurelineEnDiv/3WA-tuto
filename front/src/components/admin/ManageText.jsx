import axios from "axios"
import { useState, useEffect, Fragment } from "react"
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../tools/constante.js'


const ManageText = () => {

    const [textList, setTextList] = useState([])
  

    useEffect(() => {
        if (textList.length === 0) {
            axios.get(`${BASE_URL}/managetext`)
                .then(res => setTextList(res.data.result))
                .catch(err => console.log(err))
        }
    }, [textList])

    return (
        <div className=" container admin-margin-top">
            <h1>Gestion des textes</h1>
             <h2>Modifier un texte</h2>
                <ul>
                  {textList.map((text, i) => {
                    return (
                      <Fragment key={i}>
                          <li className="li-admin">
                            <NavLink to={`/edittext/${text.id}`}>
                              {text.zone}
                            </NavLink>
                          </li>
                      </Fragment>
                    )
                  })}
                </ul>
        </div>
    )
}

export default ManageText