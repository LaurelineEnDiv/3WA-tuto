import { pool } from "../../config/database.js"
// import {asyncQuery} from "../config/database.js"

export default (req, res) => {
    const { id } = req.body
    const sql = "SELECT * FROM users WHERE id = ?"
    const paramsSQL = [id]
    pool.query(sql, paramsSQL, (err, result) => {
        if (err) throw err
        res.json({ result })
    })
}

//     try {
//         const result = await this.asyncQuery(sql, [id])
//         return result
//     } catch(err){
//         console.log(err)
//         return err

//     }
// }