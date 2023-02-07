import {pool} from "../config/database.js"
export default (req, res) => {
    const sql = "INSERT INTO shows (title, content, year_creation, category_id) VALUES (?,?,?,1)"
    
    const {title, content, year_creation} = req.body
    const paramsSql = [title, content, year_creation]
    pool.query(sql,paramsSql,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}