import { pool } from "../../config/database.js";

const addContact = (req, res) => {
  const { name, email, tel, type } = req.body;
  console.log(req.body);
  if (!name || !email || !tel || !type) {
    return res
      .status(400)
      .json({ message: "name, mail, phone and categorie are required" });
  }
  pool.query(
    "INSERT INTO contactDisplay SET ?",
    { name, email, tel, type },
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "internal server error" });
      }
      res.json({ message: "contact added", result });
    }
  );
};

const updateContact = (req, res) => {
  const { name, email, tel, type, id } = req.body;
  if (!name || !email || !tel || !type || !id) {
    return res
      .status(400)
      .json({ message: "name, email, tel, type and id are required" });
  }
  pool.query(
    "UPDATE contactDisplay SET name = ?, email = ?, tel = ?, type = ? WHERE id = ?",
    [name, email, tel, type, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "internal server error" });
      }
      res.json({ message: "contact updated", result });
    }
  );
};

const deleteContact = (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "id is required" });
  }
  pool.query("DELETE FROM contactDisplay WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
    res.json({ message: "contact deleted", result });
  });
};

const listContact = (req, res) => {
  pool.query("SELECT * FROM contactDisplay", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
    res.json({ result });
  });
};

export { addContact, updateContact, deleteContact, listContact };
