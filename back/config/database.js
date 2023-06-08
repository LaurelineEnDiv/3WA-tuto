import mysql from "mysql";

export let pool = mysql.createConnection({
  // // Thoses variables are for docker run
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
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
