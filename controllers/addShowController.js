import {asyncQuery} from "../config/database.js";

export default async (req, res) => {
    
      const sql = "INSERT INTO shows (title, content, year_creation, url_video, category_id) VALUES (?,?,?,?,1)"
      const {title, content, year_creation, url_video, category_id, files} = req.body
      const paramsSql = [title, content, year_creation, url_video, category_id]
      const result = await asyncQuery(sql,paramsSql)
      
      const paramsSqlPictures = []
      
      files.forEach((e) => {
        paramsSqlPictures.push([result.insertId,e])
      })
    
      const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
      const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);
      
      try{ 
      
      res.json({result, resultPictures, files}) 
    } catch(e) {
    
      console.log(e)
      res.json({error:e})
    }
    
}


