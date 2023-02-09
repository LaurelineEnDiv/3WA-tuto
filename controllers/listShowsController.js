import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT shows.image, shows.title, shows.year_creation, shows_categories.name 
    FROM shows JOIN shows_categories ON shows_categories.id = shows.category_id`
    pool.query(sql,(err, result) =>{
        if(err) throw err
        res.json({result})
    })
}