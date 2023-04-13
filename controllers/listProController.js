import { pool } from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT pro.pdf, pro.show_id, shows.title
    FROM pro 
    JOIN shows ON shows.id = pro.show_id
    `
    pool.query(sql, (err, result) => {
        if (err) throw err
        res.json({ result })
    })
}