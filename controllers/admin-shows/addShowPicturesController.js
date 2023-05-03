import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {
    const { show_id, files } = req.body
    const paramsSqlPictures = []
  
    files.forEach((e) => {
      paramsSqlPictures.push([show_id, e])
    })
  
    const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
    const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);

  try {
    res.json({ resultPictures, files })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }
}