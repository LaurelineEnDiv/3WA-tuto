import { useState } from "react";
import { BASE_URL } from "../../../tools/constante";
import axios from "axios";

const ShowCategorie = ({ categories, setCategories }) => {
  const initialStateCategorie = {
    name: "",
  };

  const [catIdEdit, setCatIdEdit] = useState(null);
  const [catIsEdit, setCatIsEdit] = useState(false);

  const [categorie, setCategorie] = useState(initialStateCategorie);

  const updateCategorie = () => {
    if (categorie.name.trim() === "") {
      alert("le nom de la catégorie ne peut pas être vide");
      return;
    }
    axios
      .post(`${BASE_URL}/updateCategorie`, {
        id: catIdEdit,
        name: categorie.name,
      })
      .then((res) => {
        setCategories(
          categories.map((e) => (e.id === catIdEdit ? categorie : e))
        );
        setCategorie(initialStateCategorie);
        setCatIsEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const cancelEdit = () => {
    setCatIsEdit(false);
    setCategorie(initialStateCategorie);
    setCatIdEdit(null);
  };

  const editCategorie = (id) => {
    setCategorie(categories.filter((categorie) => categorie.id === id)[0]);
    setCatIsEdit(true);
    setCatIdEdit(id);
  };

  const addCategorie = (e) => {
    if (categorie.name.trim() === "") {
      alert("le nom de la catégorie ne peut pas être vide");
      return;
    }
    axios
      .post(`${BASE_URL}/addCategorie`, categorie)
      .then((res) => {
        setCategories([...categories, categorie]);
        setCategorie(initialStateCategorie);
      })
      .catch((err) => console.log(err));
  };

  const supprimerCategorie = (id) => {
    axios
      .post(`${BASE_URL}/deleteCategorie`, { id })
      .then((res) => {
        setCategories(categories.filter((categorie) => categorie.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleChangeCategorie = (e) => {
    const { name, value } = e.target;
    setCategorie({ ...categorie, [name]: value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <strong>Nom</strong>
        <strong>Actions</strong>
      </div>
      {categories.map((categorie, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <p>{categorie.name}</p>
          <div>
            <button
              className="button"
              onClick={() => supprimerCategorie(categorie.id)}
            >
              X
            </button>
            <button
              className="button"
              onClick={() => editCategorie(categorie.id)}
            >
              Modifier
            </button>
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          name="name"
          onChange={handleChangeCategorie}
          value={categorie.name}
        />
        <div>
          {!catIsEdit ? (
            <button className="button" onClick={addCategorie}>
              Ajouter
            </button>
          ) : (
            <>
              <button className="button" onClick={updateCategorie}>
                Valider
              </button>
              <button className="button" onClick={cancelEdit}>
                Annuler
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCategorie;
