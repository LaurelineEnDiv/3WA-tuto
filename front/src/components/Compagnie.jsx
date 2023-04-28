import axios from "axios";
import { Fragment, useState, useEffect } from 'react';
import { BASE_URL, BASE_IMG } from "../tools/constante.js"
import mouette from "../assets/img/mouette.png";
import petitBateau from "../assets/img/petit-bateau.png";


const Compagnie = () => {
    
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/listteam`)
            .then(res => setMembers(res.data.result))
            .catch(e => console.log(e))
    }, [])
    
    return (
        <Fragment>
                <section className="container section-margin-top">
                    <h1>Les Hommes Sensibles</h1>
                        <div className="text-description">
                            <img src={petitBateau} className="img-bateau"/>
                            <p>Les Hommes Sensibles est une compagnie de cirque 
                            qui mélange acrobatie, danse, théâtre d’objet, musique, 
                            culture Hip-hop et magie (au sens large... très large).</p>
                            <p>Ses artistes ont comme points communs leurs sensibilités. 
                            Bien que différentes, elles se rejoignent et ensemble 
                            deviennent force.</p>
                            <p>Représentant ainsi l'évolution contemporaine de la virilité,
                            où l'homme, en crise identitaire, redevient simplement un homme de
                            sens, poétique, un Homme Sensible.</p>
                            <p>Loin d’être masculiniste ou révolutionnaire, l’Homme Sensible est
                            ce qu'il est, un homme nouveau, avec toute sa bêtise 
                            et toute sa beauté.</p>
                           
                            <img src={mouette} className="img-mouette"/>
                            <p>Au cœur du travail artistique de la compagnie se trouvent 
                            les failles et les doutes de ses artistes interprètes, leur 
                            confiance, leur auto-dérision, mais surtout leurs désirs. </p>
                            <p>Désirs de déplacer les esprits, de partager des émotions 
                            et de la simplicité, rire à n'en plus finir (si possible).</p>
                            <p>Faire une pause dans une vie bien agitée.</p>
                            <p>Accepter sa sensibilité et se sentir vivant autant 
                            pour les femmes, les hommes, les personnes non-binaires,
                            les enfants, les personnes âgées, les personnes ayant un handicap,
                            les super héros, bref, pour tout le monde.</p>
                        </div>
                </section>
                    
                <section className="background-image team-background-image">
                    <div className="container">
                        <h2 className="title-white">L'équipage à bord</h2>
                         <Fragment>
                            {!members && (<p>loading</p>) }
                            <div className="team row">
                            <div className="column team-member">
                                
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
                            </div>
                            </Fragment>
                    </div>
                </section>
            </Fragment>
    )
}

export default Compagnie