import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {

  const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES (?)";
  const { show_id, url_pictures, files } = req.body
  const paramsSqlPictures = []
  const resultPictures = await asyncQuery(sqlPictures, paramsSqlPictures);

  files.forEach((e) => {
    paramsSqlPictures.push([resultPictures.insertId, e])
  })
  
  // const paramsSqlPictures = []

  // files.forEach((e) => {
  //   paramsSqlPictures.push([id,e])
  // })

  // const sqlPictures = "INSERT INTO pictures (show_id, url_pictures) VALUES ?";
  // const resultPictures = await asyncQuery(sqlPictures, [paramsSqlPictures]);

  try {
    res.json({ resultPictures, files })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }
}