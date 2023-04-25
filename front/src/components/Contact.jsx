import { Fragment } from 'react'

const Contact = () => {
    return (
        <Fragment>
        <div className="contact-background-image">
            <section className="contact-container section-margin-top background-white">
            <h1 className="text-shadow-yellow">Contact</h1>
            <h2 className="title-yellow">Artistique</h2>
                <div className="contact-col">
                    <div className="contact">
                        <p className="roboto"><strong>Jean Couhet-Guichot</strong></p> 
                        <p><a href="mailto:leshommessensibles@gmail.com">leshommessensibles@gmail.com</a></p>
                        <p><a href="tel:0645878618">06 45 87 86 18</a></p>
                    </div>
                    <div className="contact">
                        <p className="roboto"><strong>Rick Pulford</strong></p>
                        <p><a href="mailto:rick.pulford">rick.pulford@gmail.com</a></p>
                        <p><a href="tel:0760355418">07 60 35 54 18</a></p>
                    </div>
                </div>
            <h2 className="title-yellow">Production et diffusion</h2>
                <div className="contact">
                    <p className="roboto"><strong>Justine Swygedauw Martinez</strong></p>
                    <p><a href="mailto:diffusionleshommessensibles@gmail.com">diffusionleshommessensibles@gmail.com</a></p>
                    <p><a href="tel:0637990871">06 37 99 08 71</a></p>
                </div>
            <h2 className="title-yellow">Production et administration</h2>
                <div className="contact">
                    <p className="roboto"><strong>Elise Girard</strong></p>
                    <p><a href="mailto:admleshommessensibles@gmail.com">admleshommessensibles@gmail.com</a></p>
                    <p><a href="tel:0682221807">06 82 22 18 07</a></p>
                </div>
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