import {pool} from "../../config/database.js"
import bcrypt from 'bcrypt'

export default async (req, res) => {
    const {nom, prenom, email, id, password} = req.body
    console.log({test:"test", nom, prenom, email, id, password})
    const saltRounds = 10
    let sql = "UPDATE users SET "
    let paramsSQL = []

    // si on veut changer le mdp 
    if(password){
        if(password.length < 8){ 
            return res.json({response:'mdp trop court'})
        }
        const mpdHash = await bcrypt.hash(password,saltRounds)
        paramsSQL.push(mpdHash) // On ajoute le hash du mot de passe à la liste des paramètres SQL.
        sql += "password = ? "
    } else { // sinon 
        paramsSQL = [nom, prenom, email, id]
        sql += "nom = ?, prenom = ?, email = ? "
    }
    
    paramsSQL.push(id) // On ajoute l'ID de l'utilisateur à la liste des paramètres SQL.
    sql += "WHERE id = ?"
    
    // UPDATE users SET password = ? WHERE id = ?
    // UPDATE users SET nom = ?, prenom = ?, email = ? WHERE id = ?

pool.query(sql,paramsSQL,(err, result) => {
        if(err) throw err
        res.json({result})
    })
}