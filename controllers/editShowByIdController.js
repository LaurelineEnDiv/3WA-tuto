import {pool} from "../config/database.js"

export default (req, res) => {
    const {title, year_creation, content, url_video, category_id, id} = req.body
    const sql = "UPDATE shows SET title = ?, year_creation = ?, content = ?, url_video = ?, category_id = ? WHERE id = ?"
    const paramsSQL = [title, year_creation, content, url_video,category_id, id]
    
    
    
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}