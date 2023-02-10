import express from "express";
import listShowsController from "../controllers/listShowsController.js";
import addShowController from "../controllers/addShowController.js";
import uploadFile from '../controllers/uploadFile.js'
import getCategoriesController from '../controllers/getCategoriesController.js'
import showController from '../controllers/showController.js'
import getShowByIdController from '../controllers/getShowByIdController.js'

const router = express.Router();

router.get("/listshows", listShowsController);
router.post("/addshow", addShowController);
router.post("/show", showController)
router.post("/getShowById", getShowByIdController)
router.post("/uploadFile", uploadFile);
router.get("/getCategories", getCategoriesController);


export default router;
