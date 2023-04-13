import {asyncQuery} from "../../config/database.js";

export default async (req, res) => {
    
    const {title, pitch, year_creation, content, url_video, category_id, id} = req.body
    const sql = "UPDATE shows SET title = ?, pitch = ?, year_creation = ?, content = ?, url_video = ?, category_id = ? WHERE id = ?"
    const paramsSql = [title, pitch, year_creation, content, url_video,category_id, id]
    const result = await asyncQuery(sql,paramsSql)
      
      // const paramsSqlPictures = []
      
      // files.forEach((e) => {
      //   paramsSqlPictures.push([id,e])
      // })
    
      // const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
      // const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);
    
    try{ 
      
      res.json({result}) 
    } catch(e) {
    
      console.log(e)
      res.json({error:e})
    }
}