import {pool} from "../config/database.js"

export default (req, res) => {
    const {nom, prenom, email, password, id} = req.body
    const sql = "UPDATE users SET nom = ?, prenom = ?, email = ?, password = ? WHERE id = ?"
    const paramsSQL = [nom, prenom, email, password, id]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}