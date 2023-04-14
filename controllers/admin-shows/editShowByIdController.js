import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {

  const { title, pitch, year_creation, content, url_video, category_id, id } = req.body
  const sql = "UPDATE shows SET title = ?, pitch = ?, year_creation = ?, content = ?, url_video = ?, category_id = ? WHERE id = ?"
  const paramsSql = [title, pitch, year_creation, content, url_video, category_id, id]
  const result = await asyncQuery(sql, paramsSql)

  try {
    res.json({ result })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }
}