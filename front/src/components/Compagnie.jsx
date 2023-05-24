import axios from "axios";
import { Fragment, useState, useEffect } from 'react';
import { BASE_URL, BASE_IMG } from "../tools/constante.js"
import mouette from "../assets/img/mouette.png";
import petitBateau from "../assets/img/petit-bateau.png";
import partenaires from "../assets/img/partenaires.jpg";


const Compagnie = () => {
    
    const [text, setText] = useState([])
    const [members, setMembers] = useState([])
    const [partners, setPartners] = useState([])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/compagnietext`)
            .then(res => setText(res.data.result))
    }, [])

    useEffect(() => {
        axios.get(`${BASE_URL}/listteam`)
            .then(res => setMembers(res.data.result))
            .catch(e => console.log(e))
    }, [])
    
    useEffect(() => {
        axios.get(`${BASE_URL}/listpartners`)
            .then(res => setPartners(res.data.result))
    }, [])
    
    return (
        <Fragment>
                <section className="container section-margin-top">
                    {text.length > 0 && text.map((item, i) => (
                    <div key={i}>
                        <h1>{item.titre}</h1>
                        <div className="text-description">
                            <img src={petitBateau} className="img-bateau"/>
                            <p>{item.text1}</p>
                           
                            <img src={mouette} className="img-mouette"/>
                            <p>{item.text2}</p>
                        </div>
                    </div>
                    ))} 
                </section>
                    
                <section className="team-background-image background-image">
                    <div className="container">
                        <h2 className="title-white">L'équipage à bord</h2>
                         <Fragment>
                            {!members && (<p>loading</p>) }
                            <div className="tab-row">
                                {members.length > 0 && members.map((member, i) => {
                                return(
                                    <div className="column team-member" key={i}>
                                    <img src={`${BASE_IMG}/${member.photo}`} alt={`${member.prenom}${member.nom}`} />
                                        <div className="nom-role background-lightgrey">
                                            <h3>{member.prenom} {member.nom}</h3>
                                            <span className="role">{member.role}</span>
                                        </div>
                                    </div>
                                )
                                })}
                            </div>
                        </Fragment>
                    </div>
                </section>
                
                <section className="container">
                    <h2>Partenaires</h2>
                    <Fragment>
                    {partners.length > 0 && partners.map((partner, i) => (
                        <a key={i} href={partner.url} target="_blank"> {partner.nom} / </a>
                    ))} 
                        <div className="logos">
                         <img className="img-logos" src={partenaires}/>
                        </div>
                    </Fragment>
                </section>
                
                
            </Fragment>
    )
}

export default Compagnie