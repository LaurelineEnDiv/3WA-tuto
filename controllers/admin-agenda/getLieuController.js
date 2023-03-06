import {pool} from "../../config/database.js"

export default (req, res) => {
    const {} = req.body
    const sql = "SELECT * FROM lieux"
    pool.query(sql,[],(err, result) => {
        if(err) throw err
        res.json({result})
    })
}