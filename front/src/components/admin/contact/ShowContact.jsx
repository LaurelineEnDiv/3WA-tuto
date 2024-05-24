import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../tools/constante";

const ShowContact = ({ categories }) => {
  const initialStateContact = {
    name: "",
    email: "",
    tel: "",
    type: 0,
  };

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(initialStateContact);
  const [contactIdEdit, setContactIdEdit] = useState(null);
  const [contactIsEdit, setContactIsEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/listeContact`)
      .then((res) => setContacts(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  const getCategories = (id) => {
    return categories.map((categorie) => {
      if (categorie.id === id) {
        return categorie.name;
      }
    });
  };

  const editContact = (id) => {
    setContact(contacts.filter((contact) => contact.id === id)[0]);
    setContactIsEdit(true);
    setContactIdEdit(id);
  };

  const cancelEdit = () => {
    setContactIsEdit(false);
    setContact(initialStateContact);
    setContactIdEdit(null);
  };

  const addContact = () => {
    if (
      contact.name.trim() === "" ||
      contact.email.trim() === "" ||
      contact.tel.trim() === ""
    ) {
      alert("le nom, le mail et le téléphone ne peuvent pas être vide");
      return;
    }
    axios
      .post(`${BASE_URL}/addContact`, contact)
      .then((res) => {
        setContacts([...contacts, contact]);
        setContact(initialStateContact);
      })
      .catch((err) => console.log(err));
  };

  const supprimerContact = (id) => {
    axios
      .post(`${BASE_URL}/deleteContact`, { id })
      .then((res) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const updateContact = () => {
    if (
      contact.name.trim() === "" ||
      contact.email.trim() === "" ||
      contact.tel.trim() === ""
    ) {
      alert("le nom, le mail et le téléphone ne peuvent pas être vide");
      return;
    }
    axios
      .post(`${BASE_URL}/updateContact`, { ...contact, id: contactIdEdit }) // TODO : updateContact
      .then((res) => {
        setContacts(
          contacts.map((e) => (e.id === contactIdEdit ? contact : e))
        );
        setContact(initialStateContact);
        setContactIsEdit(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeContact = (e) => {
    const { name, value } = e.target;
    if (name === "type") {
      setContact({ ...contact, [name]: parseInt(value) });
      return;
    }
    setContact({ ...contact, [name]: value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <b>Nom</b>
        <b>Mail</b>
        <b>Téléphone</b>
        <b>Catégorie</b>
        <b>Action</b>
      </div>
      {contacts.map((contact, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.tel}</p>
          <p>{getCategories(contact.type)}</p>
          <div>
            <button
              className="button"
              onClick={() => supprimerContact(contact.id)}
            >
              X
            </button>
            <button className="button" onClick={() => editContact(contact.id)}>
              Modifier
            </button>
          </div>
        </div>
      ))}
      {!contactIsEdit ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            onChange={handleChangeContact}
            value={contact.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            onChange={handleChangeContact}
            value={contact.email}
          />
          <input
            type="text"
            name="tel"
            placeholder="Téléphone"
            onChange={handleChangeContact}
            value={contact.tel}
          />
          <select
            name="type"
            onChange={handleChangeContact}
            value={contact.type}
          >
            {categories.map((categorie, i) => (
              <option key={i} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
          <button className="button" onClick={addContact}>
            Ajouter
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            name="name"
            onChange={handleChangeContact}
            value={contact.name}
          />
          <input
            type="email"
            name="email"
            onChange={handleChangeContact}
            value={contact.email}
          />
          <input
            type="text"
            name="tel"
            onChange={handleChangeContact}
            value={contact.tel}
          />
          <select
            name="type"
            onChange={handleChangeContact}
            value={contact.type}
          >
            {categories.map((categorie, i) => (
              <option key={i} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
          <button className="button" onClick={updateContact}>
            Sauvegarder
          </button>
          <button className="button" onClick={cancelEdit}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );
};

export default ShowContact;
