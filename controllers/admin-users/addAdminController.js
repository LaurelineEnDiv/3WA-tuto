import {asyncQuery} from "../../config/database.js"
import bcrypt from 'bcrypt'

const emailExist  = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    const response  = await asyncQuery(sql,[email])
    if(response.length > 0) return response
    return false
} 

export default async (req, res) => {
        const {nom, prenom, email, password} = req.body
        console.log({nom, prenom, email, password})
        const saltRounds = 10
        const sql = "INSERT INTO users (nom, prenom, email, password) VALUES (?,?,?,?)"
        
        if(password.length < 8){
            return res.json({response:'votre mot de passe doit contenir au moins 8 caractères'})
        }
        
        else if(nom.length > 255 || prenom.length > 255 || email.length > 255 || password.length > 255){
            return res.json({response:'Utilisez moins de 255 caractères'})
        }
        else if(nom.length <= 0 || prenom.length <= 0 || email.length <= 0 || password.length <= 0){
            return res.json({response:"Vous n'avez pas rempli tous les champs"})
        }
        
        try {
            // on vérifie si l'email existe en BDD
            const emailPresent = await emailExist(email)
        
            // error a la vérification de l'email
            if(emailPresent === undefined){
                return res.json({error:"une erreur s'est produite"})
            }
            
            // Email deja present en BDD 
            if(emailPresent.length > 0) {
                return res.json({response:'email déjà présent'})
            }
            console.log(emailPresent)
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,saltRounds)
            
            // on créé la liste des params pour add user
            const paramsSql = [nom, prenom, email, mpdHash]
            
            // on fait la requête
            const createUser = await asyncQuery(sql,paramsSql)
            
            // on retourne la réponse
            return res.json({response:createUser, response:'Votre compte admin est bien créé!'})
        }catch(err){
            console.log(err)
            return res.json({error:err})
        }
        
    }