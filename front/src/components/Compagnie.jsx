import {Fragment} from 'react';
import baleine from "../assets/img/baleine.png";
import mouette from "../assets/img/mouette.png";
import petitBateau from "../assets/img/petit-bateau.png";
import imgJean from "../assets/img/equipe/Jean_Couhet-Guichot.jpg";
import imgRick from "../assets/img/equipe/Rick-Pulford.jpg";
import imgArthur from "../assets/img/equipe/Arthur-Amouroux.jpg";
import imgJustine from "../assets/img/equipe/Justine-Swygedauw.jpg";
import imgElise from "../assets/img/equipe/Elise-Girard.jpg";
import imgRobin from "../assets/img/equipe/Robin-Socasau.jpg";

const Compagnie = () => {
    return(
        <Fragment>
        <div className="container section-margin-top">
            <h1>Les Hommes Sensibles</h1>
                <div className="text-description">
                    <div>
                    <img src={baleine} className="img-1"/>
                    <p>Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie, danse, théâtre d’objet, 
                    musique, culture Hip-hop et magie (au sens large... très large).
                    </p>
                    </div>
                    
                    <div>
                    <p>Ses artistes ont comme points communs leurs sensibilités.</p>
                    <p>Bien que différentes, elles se rejoignent et ensemble deviennent force.</p>
                    <img src={mouette} className="img-2"/>
                    <p>Représentant ainsi l'évolution contemporaine de la virilité, où l'homme, en crise identitaire, redevient simplement 
                    un homme de sens, poétique, un Homme Sensible.</p>
                    <p>Loin d’être masculiniste ou révolutionnaire, l’Homme Sensible est ce qu'il est, un homme nouveau, avec toute sa bêtise et toute sa beauté.</p>
                    </div>
                    
                    <div>
                    <img src={petitBateau} className="img-3"/>
                    <p>Au cœur du travail artistique de la compagnie se trouvent les failles et les doutes de ses artistes interprètes, 
                    leur confiance, leur auto-dérision, mais surtout leurs désirs. </p>
                    <p>Désirs de déplacer les esprits, de partager 
                    des émotions et de la simplicité, rire à n'en plus finir (si possible).</p>
                    <p>Faire une pause dans une vie bien agitée.</p>
                    <p>Accepter sa sensibilité et se sentir vivant autant pour les femmes, les hommes, les personnes non-binaires, 
                    les enfants, les personnes âgées, les personnes ayant un handicap, les super héros, bref, pour tout le monde.</p>
                    </div>
                </div>
                
            <h2>Equipe</h2>
                <div className="team">
                    <div className="team-member">
                        <img src={imgJean} alt='Jean Couhet-Guichot'/>
                        <h3>Jean Couhet-Guichot</h3>
                        <p>Artiste</p>
                    </div>
                    <div className="team-member">
                        <img src={imgRick} alt='Rick Pulford'/>
                        <h3>Rick Pulford</h3>
                        <p>Artiste</p>
                    </div>
                    <div className="team-member">
                        <img src={imgArthur} alt='Arthur Amouroux'/>
                        <h3>Arthur Amouroux</h3>
                        <p>Artiste</p>
                    </div>
                    <div className="team-member">
                        <img src={imgJustine} alt='Justine Swygedauw'/>
                        <h3>Justine Swygedauw</h3>
                        <p>Diffusion</p>
                    </div>
                    <div className="team-member">
                        <img src={imgElise} alt='Elise Girard'/>
                        <h3>Elise Girard</h3>
                        <p>Administration</p>
                    </div>
                    <div className="team-member">
                        <img src={imgRobin} alt='Robin Socasau'/>
                        <h3>Robin Socasau</h3>
                        <p>Regard extérieur</p>
                    </div>
                </div>
            
            </div>
        </Fragment>
    )
}

export default Compagnie