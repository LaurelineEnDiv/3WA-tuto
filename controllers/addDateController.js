import {pool} from "../config/database.js"

export default (req, res) => {
            
        const sql = "INSERT INTO agenda (date, show_id, lieu_id) VALUES (?,?,?)"
        const {date, show_id, lieu_id} = req.body
        const paramsSql = [date, show_id, lieu_id]
            // const result = await asyncQuery(sql,paramsSql)
            
            
pool.query(sql,paramsSql,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}

