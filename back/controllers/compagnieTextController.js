import { pool } from "./../config/database.js";

export default (req, res) => {
  let sql = `SELECT id, zone, titre, text1, text2 
    FROM textes
    WHERE zone LIKE '%compagnie%'
    `;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ result });
  });
};
