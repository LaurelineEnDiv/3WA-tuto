import { asyncQuery } from "../../config/database.js";

export default async(req, res) => {

  const sql = "INSERT INTO ft (show_id, ft_pdf) VALUES (?, ?)"
  const { show_id, files} = req.body
  const paramsSql = [show_id, files]

  const result = await asyncQuery(sql, paramsSql)

  files.forEach((e) => {
    paramsSql.push([result.insertId, e])
  })

  try {

    res.json({ result, files })
  }
  catch (e) {

    console.log(e)
    res.json({ error: e })
  }

}
