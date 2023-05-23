import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {

  const { titre, text1, text2, id } = req.body
  const sql = "UPDATE textes SET titre = ?, text1 = ?, text2 = ? WHERE id = ?"
  const paramsSql = [titre, text1, text2, id]
  const result = await asyncQuery(sql, paramsSql)

  try {
    res.json({ result })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }
}