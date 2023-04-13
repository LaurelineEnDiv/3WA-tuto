import {asyncQuery} from "../config/database.js"
export default async (req, res) => {
    const {id} = req.body
    const sqlShow = `
    SELECT shows.title, shows.pitch, shows.content, shows.url_video, shows_categories.categorie
    FROM shows 
    JOIN shows_categories ON shows_categories.id = shows.category_id 
    WHERE shows.id = ?
    `
    const paramsSQL = [id]
    
    const sqlPictures = `
    SELECT url_pictures, image_selected, show_id
    FROM pictures 
    WHERE show_id = ? AND image_selected = 0
    `
    
    try{
        const showData = await asyncQuery(sqlShow,paramsSQL)
        const showPictures = await asyncQuery(sqlPictures,paramsSQL)
        res.json({sqlShow:showData, sqlPictures:showPictures})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
    
  
}

