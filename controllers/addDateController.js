import {asyncQuery} from "../config/database.js";

export default async (req, res) => {
        
        const sql = "INSERT INTO agenda (date, show_id, lieu_id) VALUES (?,?,?)"
        const {date, show_id, lieu_id, nom_lieu, site_web, ville, departement, pays} = req.body
        
        const sqlLieux = "INSERT INTO lieux (nom_lieu, site_web, ville, departement, pays) VALUES (?,?,?,?,?)"
        const paramsSqlLieux = [nom_lieu, site_web, ville, departement, pays]
        
        let id_lieu = lieu_id 
        
       try{ 
           // si le lieu vient d'être créé par l'admin on l'insert en BDD
         if(lieu_id == -1){
             const resultLieux = await asyncQuery(sqlLieux, paramsSqlLieux);
             id_lieu = resultLieux.insertId
         }
         
         const paramsSql = [date, show_id, id_lieu]
         const result = await asyncQuery(sql,paramsSql)
         res.json({result})
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
        

}

