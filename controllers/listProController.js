import { pool } from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT diff.diff_pdf, diff.show_id, ft.ft_pdf, ft.ft_show_id, shows.id, shows.title
    FROM diff
    LEFT JOIN ft ON ft.ft_show_id = diff.show_id
    JOIN shows ON shows.id = diff.show_id 
    `
    pool.query(sql, (err, result) => {
        if (err) throw err
        res.json({ result })
    })
}