import {Fragment} from 'react';
import mouette from "../assets/img/mouette.png";
import petitBateau from "../assets/img/petit-bateau.png";
import jean from "../assets/img/equipe/Jean-Couhet-Guichot.jpg";
import rick from "../assets/img/equipe/Rick-Pulford.jpg";
import arthur from "../assets/img/equipe/Arthur-Amouroux.jpg";
import justine from "../assets/img/equipe/Justine-Swygedauw.jpg";
import elise from "../assets/img/equipe/Elise-Girard.jpg";
import robin from "../assets/img/equipe/Robin-Socasau.jpg";
        
    const Compagnie = () => {
        return(
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
                        <h2 className="background-lightgrey margin">L'équipage à bord</h2>
                            <div className="team row">
                                <div className="column team-member">
                                    <img src={jean} alt='Jean Couhet-Guichot'/>
                                    <div className="nom-role background-lightgrey">
                                        <h3>Jean Couhet-Guichot</h3>
                                        <span className="role">Artiste</span>
                                    </div>
                                </div>
                                <div className="column team-member">
                                    <img src={rick} alt='Rick Pulford'/>
                                    <div className="nom-role background-lightgrey">
                                        <h3>Rick Pulford</h3>
                                        <span className="role">Artiste</span>
                                    </div>
                                </div>
                                <div className="column team-member">
                                    <img src={arthur} alt='Arthur Amouroux'/>
                                    <div className="nom-role background-lightgrey">
                                    <h3>Arthur Amouroux</h3>
                                    <span className="role">Artiste</span>
                                    </div>
                                </div>
                                <div className="column team-member">
                                    <img src={justine} alt='Justine Swygedauw'/>
                                    <div className="nom-role background-lightgrey">
                                        <h3>Justine Swygedauw</h3>
                                        <span className="role">Diffusion</span>
                                    </div>
                                </div>
                                <div className="column team-member">
                                    <img src={elise} alt='Elise Girard'/>
                                    <div className="nom-role background-lightgrey">
                                        <h3>Elise Girard</h3>
                                        <span className="role">Administration</span>
                                    </div>
                                </div>
                                <div className="column team-member">
                                    <img src={robin} alt='Robin Socasau'/>
                                    <div className="nom-role background-lightgrey">
                                        <h3>Robin Socasau</h3>
                                        <span className="role">Regard extérieur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Fragment>
        )
    }
        
export default Compagnie