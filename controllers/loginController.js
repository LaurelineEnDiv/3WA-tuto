import {asyncQuery} from "../config/database.js"
import bcrypt from "bcrypt"
import {generateToken} from "../config/token.js"

const emailExist  = async (email) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    const response  = await asyncQuery(sql,[email])
    if(response.length > 0) return true
    return false
} 

const login = async (email, password, generateToken) => {    
    
        try{
            const dataBDD = await emailExist(email) 
            
            if(!dataBDD[0]){
                return {response: "E-mail ou mot de passe invalide"}
            } else if(email.length > 255 || password.length > 255){
                return {response:'Utiliser moins de 250 caractères'}
            } else if(email.length <= 0 || password.length <= 0){
                return {response:"Veuillez remplir tous les champs"}
            }
            
            const passwordIsValide = await bcrypt.compare(password,dataBDD[0].password)
            const token = await this.generateResponse(dataBDD[0], generateToken)
            
            if(passwordIsValide){
                return{response:passwordIsValide, token}
            }
            
            return{response:"E-mail ou mot de passe invalide"}
        } catch (err){
            return err
        }
            
    }    

const generateResponse = async (userDataSQL) => {
    
    const admin = true
    
    const userData = { 
        id:userDataSQL.id,
        nom:userDataSQL.nom,
        prenom:userDataSQL.prenom,
        email:userDataSQL.email,
        user:true,
        admin,
    }
    
    try {
        const token = await generateToken(userData)
        return {response:true, admin, token}
        } catch(err){
        console.log(err)
        return err
        }
}

export default async (req, res) => {
    const {password, email} = req.body
    const sql = "SELECT * FROM users WHERE email = ?"
    const paramsSql = [email]

    try {
        const result = await asyncQuery(sql, paramsSql)
        const response = await generateResponse(result[0])
        const resultCompare = await bcrypt.compare(password, result[0].password)
        res.json(resultCompare ? {response} : {response:null})
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}



    



