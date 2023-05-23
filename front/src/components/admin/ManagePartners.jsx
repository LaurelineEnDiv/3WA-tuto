import axios from "axios"
import { useState, useEffect, Fragment } from "react"
import { NavLink } from 'react-router-dom'
import { BASE_URL } from '../../tools/constante.js'


const ManagePartners = () => {

    const initialState = {
        nom: '',
        url: '',
    }
    const [partnersList, setPartnersList] = useState([])
    const [partnerData, setPartnerData] = useState(initialState)

    useEffect(() => {
        if (partnersList.length === 0) {
            axios.get(`${BASE_URL}/listpartners`)
                .then(res => setPartnersList(res.data.result))
                .catch(err => console.log(err))
        }
    }, [partnersList])

    const deletePartner = (id) => {
        axios.post(`${BASE_URL}/deletePartner`, { id })
            .then(res => {
                setPartnersList(partnersList.filter(partner => partner.id !== id))
            })
            .catch(err => console.log(err))
    }

    ///////ADD PARTNER////////


    const handleChange = (e) => {
        const { name, value } = e.target
        setPartnerData({ ...partnerData, [name]: value })
    }

    const submit = (e) => {
        e.preventDefault()
        const data = {
      nom: partnerData.nom.trim(),
      url: partnerData.url.trim(),
    }

        axios.post(`${BASE_URL}/addPartner`, data)
            .then((res) => {
                
                setPartnersList([...partnersList])
                setPartnerData(initialState)

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <div className=" container admin-margin-top">
            <h1>Gestion des partenaires</h1>
             <h2>Supprimer un partenaire</h2>
                <ul>
                  {partnersList.map((partner, i) => {
                    return (
                      <Fragment key={i}>
                          <li className="li-admin">
                              {partner.nom}
                            <button className="delete" onClick={() => deletePartner(partner.id)}>X</button>
                          </li>
                      </Fragment>
                    )
                  })}
                </ul>
        <div>
           
                <Fragment>
                    <h2>Ajouter un partenaire</h2>
                    <form onSubmit={submit} method="post">
                    
                        <label>Nom</label>
                        <input type='text' name='nom' onChange={handleChange} value={partnerData.nom} />
                        
                        <label>Site Web</label>
                        <input type='text' name='url' onChange={handleChange} value={partnerData.url} />
                        
                        <div>
                        <input className="button" type='submit' value='Valider'/>
                        </div>
                    </form>
                </Fragment>
            
            </div>
            </div>
    )
}

export default ManagePartners