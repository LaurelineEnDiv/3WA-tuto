import {Fragment} from 'react'

const Contact = () => {
    return(
        <Fragment>
        <section className="section-margin-top">
        <div className="container container-center">
            <h1>Contact</h1>
            <h2>Artistique</h2>
                <div className="contact-col">
                <div className="contact">
                    <p>Jean Couhet-Guichot</p> 
                    <p><a href="mailto:leshommessensibles@gmail.com">leshommessensibles@gmail.com</a></p>
                    <p><a href="tel:0645878618">06 45 87 86 18</a></p>
                </div>
                <div className="contact">
                    <p>Rick Pulford</p>
                    <p><a href="mailto:rick.pulford">rick.pulford@gmail.com</a></p>
                    <p><a href="tel:0760355418">07 60 35 54 18</a></p>
                </div>
                </div>
            <h2>Production et diffusion</h2>
                <div className="contact">
                    <p>Justine Swygedauw Martinez</p>
                    <p><a href="mailto:diffusionleshommessensibles@gmail.com">diffusionleshommessensibles@gmail.com</a></p>
                    <p><a href="tel:0637990871">06 37 99 08 71</a></p>
                </div>
            <h2>Production et administration</h2>
                <div className="contact">
                    <p>Elise Girard</p>
                    <p><a href="mailto:admleshommessensibles@gmail.com">admleshommessensibles@gmail.com</a></p>
                    <p><a href="tel:0682221807">06 82 22 18 07</a></p>
                </div>
            <h2>Adresse</h2>
                <p>Association les Hommes Sensibles - c/o Le Lido -14 Rue de Gaillac, 31500 Toulouse</p>
                <p>SIRET : 898 459 771 000 17 - APE  90.01Z</p>
                <p>Licence 2 : PLATESV-D-2021-002810 et licence 3 - PLATESV-D-2021-002811 le 07/05/2021.</p>
        </div>
        </section>
        </Fragment>
    )
}

export default Contact