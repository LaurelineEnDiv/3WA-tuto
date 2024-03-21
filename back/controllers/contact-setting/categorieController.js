import { pool } from "./../../config/database.js";

const addCategorie = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "name is required" });
  }
  pool.query("INSERT INTO contactCategorie SET ?", { name }, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
    res.json({ message: "categorie added", result });
  });
};

const updateCategorie = (req, res) => {
  const { name, id } = req.body;
  if (!name || !id) {
    return res.status(400).json({ message: "name and id are required" });
  }
  pool.query(
    "UPDATE contactCategorie SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "internal server error" });
      }
      res.json({ message: "categorie updated", result });
    }
  );
};

const listCategorie = (req, res) => {
  pool.query("SELECT * FROM contactCategorie", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
    res.json({ result });
  });
};

const deleteCategorie = (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: "id is required" });
  }
  pool.query("DELETE FROM contactCategorie WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
    res.json({ message: "categorie deleted", result });
  });
};

export { addCategorie, updateCategorie, listCategorie, deleteCategorie };
