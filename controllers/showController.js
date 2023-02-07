import {pool} from "../config/database.js"

export default (req, res) => {
    const {id} = req.body
    let sql = `
    SELECT shows.title, shows.content, shows_categories.name
    FROM shows JOIN shows_categories ON shows_categories.id = shows.category_id WHERE shows.id = ?
    `
    const paramsSQL = [id]
    pool.query(sql,paramsSQL,(err, result) =>{
        if(err) throw err
        res.json({result})
    })
}

