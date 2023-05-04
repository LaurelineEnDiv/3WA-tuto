import axios from "axios";
import { Fragment, useState, useEffect } from 'react';
import { BASE_URL, BASE_IMG } from "../tools/constante.js"

const Contact = () => {
    
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/listcontact`)
            .then(res => setContacts(res.data.result))
            .catch(e => console.log(e))
    }, [])
    
    
    return (
        <Fragment>
        <div className="contact-background-image">
            <section className="contact-container section-margin-top background-white">
            <h1>Contact</h1>
                
            <Fragment>
                {!contacts && (<p>loading</p>) }
                <h2 className="title-yellow">Artistique</h2>
                    <div className="tab-row">
                        {contacts && contacts
                          .filter((contact) => contact.mail && contact.phone) // Filtrer les contacts ayant des valeurs valides pour mail et phone
                          .filter((contact) => contact.role === "Artiste") // Filtrer les contacts ayant un contact.role égal à "Artiste"
                          .map((contact, i) => (
                            <div className="column" key={i}>
                                <div className="contact">
                                    <h3>{contact.prenom} {contact.nom}</h3>
                                    <p><a href={`mailto:${contact.mail}`}>{contact.mail}</a></p>
                                    <p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                                </div>
                            </div>
                          ))}
                    </div>
                    
                    <h2 className="title-yellow">Production et diffusion</h2>
                    <div className="tab-row">
                        {contacts && contacts
                          .filter((contact) => contact.mail && contact.phone) // Filtrer les contacts ayant des valeurs valides pour mail et phone
                          .filter((contact) => contact.role === "Diffusion") // Filtrer les contacts ayant un contact.role égal à "Artiste"
                          .map((contact, i) => (
                            <div className="column" key={i}>
                                <div className="contact">
                                    <h3>{contact.prenom} {contact.nom}</h3>
                                    <p><a href={`mailto:${contact.mail}`}>{contact.mail}</a></p>
                                    <p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                                </div>
                            </div>
                          ))}
                    </div>
                    
                    <h2 className="title-yellow">Production et administration</h2>
                    <div className="tab-row">
                        {contacts && contacts
                          .filter((contact) => contact.mail && contact.phone) // Filtrer les contacts ayant des valeurs valides pour mail et phone
                          .filter((contact) => contact.role === "Administration") // Filtrer les contacts ayant un contact.role égal à "Artiste"
                          .map((contact, i) => (
                            <div className="column" key={i}>
                                <div className="contact">
                                    <h3>{contact.prenom} {contact.nom}</h3>
                                    <p><a href={`mailto:${contact.mail}`}>{contact.mail}</a></p>
                                    <p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                                </div>
                            </div>
                          ))}
                    </div>
                    
            </Fragment>
                
            <h2 className="title-yellow">Adresse</h2>
                <p><strong>Association les Hommes Sensibles - c/o Le Lido -14 Rue de Gaillac, 31500 Toulouse</strong></p>
                <p>SIRET : 898 459 771 000 17 - APE  90.01Z</p>
                <p>Licence 2 : PLATESV-D-2021-002810 et licence 3 - PLATESV-D-2021-002811 le 07/05/2021.</p>
        </section>
        </div>
        </Fragment>
    )
}

export default Contact