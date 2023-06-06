import { pool } from "./../config/database.js";

export default (req, res) => {
  let sql = `
    SELECT team.id, team.prenom, team.nom, team.role, profilpictures.photo
    FROM team
    JOIN profilpictures ON profilpictures.team_id = team.id
    `;
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.json({ result });
  });
};
