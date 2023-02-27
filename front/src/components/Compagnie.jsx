import {Fragment} from 'react';
import img1 from "../assets/img/equipe/Jean_Couhet-Guichot.jpg";
import img2 from "../assets/img/equipe/Rick-Pulford.jpg";

const Compagnie = () => {
    return(
        <Fragment>
            <h1>Les Hommes Sensibles</h1>
                <p>Les Hommes Sensibles est une compagnie de cirque qui mélange acrobatie, danse, théâtre d’objet, 
                musique, culture Hip-hop et magie (au sens large... très large).</p>
                <p>Ses artistes ont comme points communs leurs sensibilités.</p>
                <p>Bien que différentes, elles se rejoignent et ensemble deviennent force.</p>
                <p>Représentant ainsi l'évolution contemporaine de la virilité, où l'homme, en crise identitaire, redevient simplement 
                un homme de sens, poétique, un Homme Sensible.</p>
                <p>Loin d’être masculiniste ou révolutionnaire, l’Homme Sensible est ce qu'il est, un homme nouveau, avec toute sa bêtise et toute sa beauté.</p>
                <p>Au cœur du travail artistique de la compagnie se trouvent les failles et les doutes de ses artistes interprètes, 
                leur confiance, leur auto-dérision, mais surtout leurs désirs. </p>
                <p>Désirs de déplacer les esprits, de partager 
                des émotions et de la simplicité, rire à n'en plus finir (si possible).</p>
                <p>Faire une pause dans une vie bien agitée.</p>
                <p>Accepter sa sensibilité et se sentir vivant autant pour les femmes, les hommes, les personnes non-binaires, 
                les enfants, les personnes âgées, les personnes ayant un handicap, les super héros, bref, pour tout le monde.</p>
            <h2>Equipe</h2>
                <ul>
                <li><img src={img1} alt='Jean Couhet-Guichot'/>Jean Couhet-Guichot - Artiste</li>
                <li><img src={img2} alt='Rick-Pulford'/>Rick Pulford - Artiste</li>
                <li>Arthur Amouroux - Artiste</li>
                <li>Justine Swygedauw - Diffusion</li>
                <li>Robin Socasau - regard extérieur</li>
                <li>Alexandre Pago - président</li>
                <li>Olivier Rodier - trésorier</li>
                <li>Saturnin Zoungrana - secrétaire</li>
                </ul>
            <h2>Partenaires</h2>
            
        </Fragment>
    )
}

export default Compagnie