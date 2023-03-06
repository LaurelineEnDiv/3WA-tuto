import {asyncQuery} from "../../config/database.js"


export default async (req, res) => {
    const {url_pictures} = req.body
    console.log(req.body)
    // recupere les img qui sont image_selected = 1 par rapport au show_id 
    const sql1 = `
        UPDATE pictures 
        INNER JOIN (
            SELECT show_id 
            FROM pictures AS p 
            WHERE p.url_pictures = ?
        ) AS subq
        ON pictures.show_id = subq.show_id 
        SET image_selected = 0 
        WHERE image_selected = 1;
        `
        
    const paramsSQL1 = [url_pictures]
    
    
    const sql = "UPDATE pictures SET image_selected = 1 WHERE url_pictures = ?"
    const paramsSQL = [url_pictures]
    const result2 = await asyncQuery(sql1,paramsSQL1)
    const result = await asyncQuery(sql,paramsSQL)
    res.json({result, result2})

}