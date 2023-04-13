import {asyncQuery} from "../../config/database.js";

export default async (req, res) => {
    
    const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
    const {show_id, files} = req.body
    const paramsSqlPictures = [show_id]
    const resultPictures = await asyncQuery(sqlPictures, paramsSqlPictures);
    
    files.forEach((e) => {
        paramsSqlPictures.push([resultPictures.insertId,e])
      })
    
    try{ 
      
      res.json({resultPictures, files}) 
    } catch(e) {
    
      console.log(e)
      res.json({error:e})
    }
}