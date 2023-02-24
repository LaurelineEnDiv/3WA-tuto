import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = "SELECT date, show_id, id FROM agenda"
    pool.query(sql,(err, result) =>{
        if(err) throw err
        res.json({result})
    })
}