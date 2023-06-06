import { asyncQuery } from "./../../config/database.js";

export default async (req, res) => {
  const sql =
    "INSERT INTO team (prenom, nom, role, mail, phone ) VALUES (?,?,?,?,?)";
  const { prenom, nom, role, mail, phone, files } = req.body;
  const paramsSql = [prenom, nom, role, mail, phone];
  const result = await asyncQuery(sql, paramsSql);

  const paramsSqlPictures = [];

  files.forEach((e) => {
    paramsSqlPictures.push([result.insertId, e]);
  });

  const sqlPictures = "INSERT INTO profilpictures (team_id, photo) VALUES ?";
  const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);

  try {
    res.json({ result, resultPictures, files });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
};
