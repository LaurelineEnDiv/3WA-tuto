import { useEffect, useState } from "react";

const ShowContact = ({ categories }) => {
  const initialStateContact = {
    name: "",
    mail: "",
    phone: "",
    categorie: 0,
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // TODO : récupérer les contacts
    /*axios
        .get(`${BASE_URL}/listContact`)
        .then((res) => setContacts(res.data.result))
        .catch((err) => console.log(err));*/

    setContacts([
      {
        name: "test",
        id: 0,
        categorie: 0,
        mail: "a@a.fr",
        phone: "0606060606",
      },
      {
        name: "test2",
        id: 1,
        categorie: 1,
        mail: "b@b.fr",
        phone: "0707070707",
      },
    ]);
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
      contact.mail.trim() === "" ||
      contact.phone.trim() === ""
    ) {
      alert("le nom, le mail et le téléphone ne peuvent pas être vide");
      return;
    }
    console.log(
      "ajout du contact " +
        contact.name +
        " " +
        contact.mail +
        " " +
        contact.phone +
        " " +
        contact.categorie
    );
    // TODO
    /*axios
      .post(`${BASE_URL}/addContact`, contact)
      .then((res) => {
        setContacts([...contacts, res.data.result]);
        setContact(initialStateContact);
      })
      .catch((err) => console.log(err));*/
  };

  const supprimerContact = (id) => {
    console.log("suppression du contact id " + id);
    // TODO
    /*axios
        .post(`${BASE_URL}/deleteContact`, { id })
        .then((res) => {
            setContacts(contacts.filter((contact) => contact.id !== id));
        })
        .catch((err) => console.log(err));*/
  };

  const updateContact = () => {
    if (
      contact.name.trim() === "" ||
      contact.mail.trim() === "" ||
      contact.phone.trim() === ""
    ) {
      alert("le nom, le mail et le téléphone ne peuvent pas être vide");
      return;
    }
    console.log(
      `le contact id ${contactIdEdit} est modifié en ${contact.name} ${contact.mail} ${contact.phone} ${contact.categorie}`
    );
    // TODO
    /*axios
        .post(`${BASE_URL}/updateContact`, contact)
        .then((res) => {
            setContacts(
                contacts.map((contact) =>
                    contact.id === contactIdEdit ? contact : res.data.result
                )
            );
            setContact(initialStateContact);
            setContactIsEdit(false);
        })
        .catch((err) => console.log(err));*/
  };

  const handleChangeContact = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const [contact, setContact] = useState(initialStateContact);
  const [contactIdEdit, setContactIdEdit] = useState(null);
  const [contactIsEdit, setContactIsEdit] = useState(false);
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
          <p>{contact.mail}</p>
          <p>{contact.phone}</p>
          <p>{getCategories(contact.categorie)}</p>
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
            name="mail"
            placeholder="Mail"
            onChange={handleChangeContact}
            value={contact.mail}
          />
          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            onChange={handleChangeContact}
            value={contact.phone}
          />
          <select
            name="categorie"
            onChange={handleChangeContact}
            value={contact.categorie}
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
            name="mail"
            onChange={handleChangeContact}
            value={contact.mail}
          />
          <input
            type="text"
            name="phone"
            onChange={handleChangeContact}
            value={contact.phone}
          />
          <select
            name="categorie"
            onChange={handleChangeContact}
            value={contact.categorie}
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
