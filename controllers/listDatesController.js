import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT agenda.date, shows.title, lieux.nom_lieu, lieux.ville, lieux.departement
    FROM agenda 
    JOIN shows ON shows.id = agenda.show_id
    JOIN lieux ON lieux.id = agenda.lieu_id
    `
    
    pool.query(sql,(err, result) =>{
        if(err) throw err
        res.json({result})
    })
}