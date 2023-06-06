import mysql from "mysql2";

export let pool = mysql.createConnection({
  // // Thoses variables are for docker run
  user: process.env.DB_USER, //"laurelineauger",
  host: process.env.DB_HOST, //"db"
  database: process.env.DB_NAME, //"laurelineauger_projet",
  password: process.env.DB_PASS, //"585dc9b9c99225b16b4f2a3b33b89642",
  // // Use thoses variables if you want to use a local run of your back / db or just just use the comment line for db host on the env file (recommended)
  // // user: "root",
  // // host: "localhost",
  // // database: "laurelineauger_projet",
  // // password: "password",
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

// permet d'obtenir le resultat des requetes sql async
export const asyncQuery = async (sql, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};
