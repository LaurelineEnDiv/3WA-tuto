import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes.js";

const app = express();
app.use(
  cors({
    //origin: "http://localhost", // If you want to lunch it locally with docker or with npm start
    origin: "http://51.77.244.114",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/pdf", express.static("public/pdf"));

app.use("/", router);

app.listen(3001, () => {
  console.log("le serveur est demarré sur le port 3001");
});
