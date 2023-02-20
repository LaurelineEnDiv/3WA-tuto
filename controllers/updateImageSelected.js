import {pool} from "../config/database.js"


export default (req, res) => {
    const {url_pictures} = req.body
    const sql = "UPDATE pictures SET image_selected = 1 WHERE url_pictures = ?"
    const paramsSQL = [url_pictures]
    pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}