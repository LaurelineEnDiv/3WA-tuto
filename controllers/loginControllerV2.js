import { asyncQuery } from "../config/database.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/token.js";

const emailExist = async (email) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  const response = await asyncQuery(sql, [email]);
  if (response.length > 0) return true;
  return false;
};

//vérifie si l'email et le password sont valides et génère une réponse JSON basée 
//sur le résultat de l'authentificarion :

const login = async (email, password) => {
  try {
    const data = await emailExist(email);

    if (!data) {
      return { response: "E-mail ou mot de passe invalide" };
    } else if (email.length > 255 || password.length > 255) {
      return { response: "Utiliser moins de 250 caractères" };
    } else if (email.length <= 0 || password.length <= 0) {
      return { response: "Veuillez remplir tous les champs" };
    }
    
 const passwordIsValid = await bcrypt.compare(
      password,
      data[0].password
    );
    const token = await generateResponse(data[0]);

    if (passwordIsValid) {
      return { response: true, token };
    }

    return { response: "E-mail ou mot de passe invalide" };
  } catch (err) {
    console.log(err);
    return err;
  }
};


//génère JSON web token si authentification ok
const generateResponse = async (userDataSQL) => {
  const admin = true;

  const userData = {
    id: userDataSQL.id,
    nom: userDataSQL.nom,
    prenom: userDataSQL.prenom,
    email: userDataSQL.email,
    user: true,
    admin,
  };

  try {
    const token = await generateToken(userData);
    return { response: true, admin, token };
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default async (req, res) => {
  console.log("ixi")
  const { password, email } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  const paramsSql = [email];

  try {
    const result = await asyncQuery(sql, paramsSql);
    const response = await generateResponse(result[0]);
    const passwordIsValid = await bcrypt.compare(password, result[0].password);
    res.json(passwordIsValid ? { response } : { response: null });
    // const loginResponse = await login(email, password);
    // if (loginResponse.response === true) {
    //   const { token } = loginResponse;
    //   res.json({
    //     message: "Vous êtes connecté",
    //     token,
    //   });
    // } else {
    //   res.json({
    //     message: loginResponse.response,
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};




