import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT DATE_FORMAT(agenda.date, '%e %M %Y') 
    AS formattedDate, agenda.date, shows.title, lieux.nom_lieu, lieux.site_web, lieux.ville, lieux.departement
    FROM agenda 
    JOIN shows ON shows.id = agenda.show_id
    JOIN lieux ON lieux.id = agenda.lieu_id
    ORDER BY date
    `
    
    pool.query(sql,(err, result) =>{
        if(err) throw err
    // Formate la date avec toLocaleDateString()
    const formattedResult = result.map((row) => ({
      ...row,
      formattedDate: new Date(row.formattedDate).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    }));

    res.json({ result: formattedResult });
  });
};