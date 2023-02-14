import {asyncQuery} from "../config/database.js"
import bcrypt from 'bcrypt'

const emailExist  = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    const response  = await asyncQuery(sql,[email])
    if(response.length > 0) return true
    return false
} 

export default async (req, res) => {
        const {nom, prenom, email, password} = req.body
        const sql = "INSERT INTO users (nom, prenom, email, password) VALUES (?,?,?,?)"
        
        if(password.length <= 8){
            return {response:'mdp trop court'}
        }
        
        else if(nom.length > 255 || prenom.length > 255 || email.length > 255 || password.length > 255){
            return {response:'Utilisez moins de 250 caractères'}
        }
        else if(nom.length <= 0 || prenom.length <= 0 || email.length <= 0 || password.length <= 0){
            return {response:"Vous n'avez pas rempli tous les champs"}
        }
        
        try {
            // on vérifie si l'email existe en BDD
            const emailPresent = await emailExist(email)
        
            // error a la vérification de l'email
            if(emailPresent === undefined){
                return
            }
            
            // Email deja present en BDD 
            if(emailPresent.length > 0) {
                return {response:'email déjà présent'}
            }
            console.log(emailPresent)
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,this.saltRounds)
            
            // on créé la liste des params pour add user
            const paramsSql = [nom, prenom, email, mpdHash]
            
            // on fait la requete
            const createUser = await this.asyncQuery(sql,paramsSql)
            
            // on retourne la réponse
            return {response:createUser, response:'Votre compte est bien créé, vous pouvez désormais vous connecter'}
        }catch(err){
            console.log(err)
            return
        }
        
    }