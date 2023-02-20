import {pool} from "../config/database.js"

export default (req, res) => {
    let sql = `
    SELECT pictures.image_selected, shows.title, shows.year_creation, shows_categories.name, shows.id
    FROM shows 
    JOIN shows_categories ON shows_categories.id = shows.category_id
    JOIN pictures ON pictures.show_id = shows.id
    
    `
    pool.query(sql,(err, result) =>{
        if(err) throw err
        res.json({result})
    })
}