import { pool } from "./../config/database.js";

export default (req, res) => {
  let sql = `SELECT id, zone, titre, text1 
    FROM textes
    WHERE zone LIKE '%home%'
    `;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ result });
  });
};
