import express from "express";
import listShowsController from "../controllers/listShowsController.js";
import addShowController from "../controllers/addShowController.js";
import uploadFile from '../controllers/uploadFile.js'

const router = express.Router();

router.get("/listshows", listShowsController);
router.post("/addshow", addShowController);
router.post("/uploadFile", uploadFile);


export default router;
