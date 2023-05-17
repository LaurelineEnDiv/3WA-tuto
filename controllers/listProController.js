import { pool } from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT diff.diff_pdf, diff.show_id, ft.ft_pdf,ft.show_id, shows.title
    FROM diff 
    JOIN ft
    JOIN shows ON shows.id = diff.show_id AND shows.id = ft.show_id
    `
    pool.query(sql, (err, result) => {
        if (err) throw err
        res.json({ result })
    })
}