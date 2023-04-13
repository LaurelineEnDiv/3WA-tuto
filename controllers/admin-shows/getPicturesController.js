import { pool } from "../../config/database.js"

export default (req, res) => {
    const { id } = req.body

    const paramsSQL = [id]
    const sqlPictures = `
    SELECT url_pictures, show_id, id
    FROM pictures
    WHERE show_id = ?
    `

    pool.query(sqlPictures, paramsSQL, (err, result) => {

        if (err) throw err
        res.json({ result })
    })
}
