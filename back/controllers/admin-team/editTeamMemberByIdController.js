import { asyncQuery } from "./../../config/database.js";

export default async (req, res) => {
  const { prenom, nom, role, mail, phone, id } = req.body;
  const sql =
    "UPDATE team SET prenom = ?, nom = ?, role = ?, mail = ?, phone = ? WHERE id = ?";
  const paramsSql = [prenom, nom, role, mail, phone, id];
  const result = await asyncQuery(sql, paramsSql);

  try {
    res.json({ result });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
};
