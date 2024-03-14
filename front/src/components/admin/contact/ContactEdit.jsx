import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../tools/constante";
import ShowCategorie from "./ShowCategorie";
import ShowContact from "./ShowContact";

const ContactEdit = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // TODO : récupérer les catégories
    /*axios
      .get(`${BASE_URL}/listCategorie`)
      .then((res) => setCategories(res.data.result))
      .catch((err) => console.log(err));

    */
    setCategories([
      { name: "test", id: 0 },
      { name: "test2", id: 1 },
    ]);
  }, []);

  return (
    <div className="container admin-margin-top">
      <h1>Edition de la page Contact</h1>
      <section>
        <h2> Categorie</h2>
        <article>
          <ShowCategorie categories={categories} />
        </article>
      </section>
      <section>
        <h2>Contacts</h2>
        <article>
          <ShowContact categories={categories} />
        </article>
      </section>
    </div>
  );
};

export default ContactEdit;
