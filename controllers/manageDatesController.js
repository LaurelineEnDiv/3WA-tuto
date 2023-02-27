import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT DATE_FORMAT(date, '%e %M %Y')
    AS formattedDate, show_id, id 
    FROM agenda
    ORDER BY date
    `
    pool.query(sql,(err, result) =>{
        if(err) throw err
    // Format the date using toLocaleDateString()
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