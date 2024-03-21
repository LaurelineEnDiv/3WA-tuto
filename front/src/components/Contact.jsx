import axios from "axios";
import { Fragment, useState, useEffect } from "react";
import { BASE_URL } from "../tools/constante.js";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/listeContact`)
      .then((res) => setContacts(res.data.result))
      .catch((e) => console.log(e));
    axios
      .get(`${BASE_URL}/listCategorie`)
      .then((res) => setCategories(res.data.result))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Fragment>
      <div className="contact-background-image">
        <section className="contact-container section-margin-top background-white">
          <h1>Contact</h1>

          <>
            {contacts.length === 0 || categories.length === 0 ? (
              <p>loading</p>
            ) : (
              <>
                {categories.map((categorie, i) => {
                  return (
                    <Fragment key={i}>
                      <h2 className="title-yellow">{categorie.name}</h2>
                      <div className="tab-row">
                        {contacts &&
                          contacts
                            .filter(
                              (contact) =>
                                contact.email &&
                                contact.tel &&
                                contact.type === categorie.id
                            ) // Filtrer les contacts ayant des valeurs valides pour email et tel et ayant un type égal à la catégorie
                            .map((contact, i) => (
                              <div className="column" key={i}>
                                <div className="contact">
                                  <h3>{contact.name}</h3>
                                  <p>
                                    <a href={`mailto:${contact.email}`}>
                                      {contact.email}
                                    </a>
                                  </p>
                                  <p>
                                    <a href={`tel:${contact.tel}`}>
                                      {contact.tel}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            ))}
                      </div>
                    </Fragment>
                  );
                })}
              </>
            )}
          </>

          <h2 className="title-yellow">Adresse</h2>
          <p>
            <strong>
              Association les Hommes Sensibles - c/o Le Lido -14 Rue de Gaillac,
              31500 Toulouse
            </strong>
          </p>
          <p>SIRET : 898 459 771 000 17 - APE 90.01Z</p>
          <p>
            Licence 2 : PLATESV-D-2021-002810 et licence 3 -
            PLATESV-D-2021-002811 le 07/05/2021.
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default Contact;
