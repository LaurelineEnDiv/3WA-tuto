// import {pool} from "../config/database.js"
import {asyncQuery} from "../config/database.js";

export default async (req, res) => {
            
        const sql = "INSERT INTO agenda (date, show_id, lieu_id) VALUES (?,?,?)"
        const {date, show_id, lieu_id} = req.body
       
            
        const sqlLieux = "INSERT INTO lieux (nom_lieu, ville, code_postal, pays) VALUES (?,?,?,?)"
        const {nom_lieu, ville, code_postal, pays} = req.body
        const paramsSqlLieux = [nom_lieu, ville, code_postal, pays]
        let id_lieu = lieu_id
        
       try{ 
           // si le lieu vient d'être créé par l'admin on l'insert en BDD
         if(!lieu_id){
             const resultLieux = await asyncQuery(sqlLieux, paramsSqlLieux);
             id_lieu = resultLieux.insertId
         }
         
         const paramsSql = [date, show_id, id_lieu.insertId]
         const result = await asyncQuery(sql,paramsSql)
         res.json({result})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
        
            
// pool.query(sql,paramsSql,(err, result) => {
//         if(err) throw err
//         res.json({result})
//     })
}

