import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {
  const sql = "INSERT INTO partenaires (nom, url ) VALUES (?,?)"
  const {nom, url} = req.body
  const paramsSql = [nom, url]
  const result = await asyncQuery(sql, paramsSql)

  try {

    res.json({result})
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }

}
