import {pool} from "../config/database.js"

export default (req, res) => {
    const {} = req.body
    const sql = "SELECT * FROM pictures"
    pool.query(sql,[],(err, result) => {
        if(err) throw err
        res.json({result})
    })
}