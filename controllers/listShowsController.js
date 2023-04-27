import { pool } from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT pictures.image_selected, pictures.url_pictures, shows.title, shows.pitch, shows.id
    FROM shows 
    JOIN pictures ON pictures.show_id = shows.id
    `
    pool.query(sql, (err, result) => {
        if (err) throw err
        res.json({ result })
    })
}