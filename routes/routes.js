import express from "express";
import middleware from "../controllers/middlewareV2.js";
import listShowsController from "../controllers/listShowsController.js";
import addShowController from "../controllers/addShowController.js";
import uploadFile from '../controllers/uploadFile.js';
import getCategoriesController from '../controllers/getCategoriesController.js';
import showController from '../controllers/showController.js';
import getShowByIdController from '../controllers/getShowByIdController.js';
import addUserController from "../controllers/addUserController.js";
import loginController from "../controllers/loginController.js";

const router = express.Router();

router.get("/listshows", listShowsController);
router.get("/getCategories", getCategoriesController);
router.post("/addshow", addShowController);
router.post("/show", showController)
router.post("/getShowById", getShowByIdController)
router.post("/addUser", addUserController);
router.post("/login", middleware, loginController) 
router.post("/uploadFile", uploadFile);



export default router;
