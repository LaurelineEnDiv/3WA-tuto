import express from "express"
import cors from "cors"
import {pool} from "./config/database.js"
import bodyParser from "body-parser"


const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let sql = "SELECT * FROM users"
    pool.query(sql,(err, result) => {
        if(err) throw err
        res.json({result})
        
    })
})

app.post("/test", (req, res) => {
    let sql = "SELECT * FROM users WHERE id = ?"
    let paramsSql = [req.body.result]
    pool.query(sql,paramsSql,(err, result) => {
        if(err) throw err
        console.log(result)
        res.json({result})
        
    })
})

app.listen(3001, () => {
    console.log("le serveur est demarrer")
})
