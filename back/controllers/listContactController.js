import { pool } from "./../config/database.js";

export default (req, res) => {
  let sql = `
    SELECT *
    FROM team
    `;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ result });
  });
};
