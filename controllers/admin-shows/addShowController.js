import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {
  try {
    const sql = "INSERT INTO shows (title, pitch, content, year_creation, url_video) VALUES (?,?,?,?,?)"
    const { title, pitch, content, year_creation, url_video, files } = req.body
    const paramsSql = [title, pitch, content, year_creation, url_video]
    const result = await asyncQuery(sql, paramsSql)
  
    const paramsSqlPictures = []
  
    files.forEach((e) => {
      paramsSqlPictures.push([result.insertId, e])
    })
  
    const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
    const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);

    res.json({ result, resultPictures, files })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }

}
