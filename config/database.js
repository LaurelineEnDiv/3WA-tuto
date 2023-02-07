import mysql from "mysql";


export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host: "db.3wa.io",// on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "laurelineauger", // identifiant BDD
    password: "585dc9b9c99225b16b4f2a3b33b89642", // le password
    database: "laurelineauger_projet", // nom de la base de donnée
});


// permet d'obtenir le resultat des requetes sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}
