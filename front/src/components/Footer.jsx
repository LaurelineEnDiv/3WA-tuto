import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

const facebookLink = "https://www.facebook.com/LesHommesSensiblescirque";
const instagramLink = "https://www.instagram.com/leshommessensibles/?hl=fr";
const youtubeLink = "https://www.youtube.com/channel/UChO_p_V7jvZT0vO2oxnr6hQ";

const Footer = () => {

  return (
    <footer className="container background-black">
          <p>Copyright © 2023 leshommessensibles.fr - Tous droits réservés</p>
          <ul className="social">
            <li>
              <a href={facebookLink}><FontAwesomeIcon icon="fa-brands fa-facebook" size="lg" /></a>
            </li>
            <li>
              <a href={instagramLink}><FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" /></a>
            </li>
            <li>
              <a href={youtubeLink}><FontAwesomeIcon icon="fa-brands fa-youtube" size="lg" /></a>
            </li>
          </ul>
          <section className="contact-footer">
            <p>Justine Swygedauw</p>
            <p>Chargée de production et diffusion</p>
            <p>06 37 99 08 71</p>
          </section>
    </footer>
  )
}

export default Footer;