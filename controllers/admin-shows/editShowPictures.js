import {asyncQuery} from "../../config/database.js";

export default async (req, res) => {
    

    const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
    const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);
    
    try{ 
      
      res.json({resultPictures}) 
    } catch(e) {
    
      console.log(e)
      res.json({error:e})
    }
}