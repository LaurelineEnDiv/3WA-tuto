import {pool} from "../../config/database.js"

export default (req, res) => {
    const {id} = req.body
    const sqlPictures = `
    SELECT url_pictures, show_id 
    FROM pictures
    WHERE show_id = ?
    `
    const paramsSQL = [id]
    
    pool.query(sqlPictures,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}

{/*JOIN shows ON shows.id = pictures.show_id*/}