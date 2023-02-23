import express from "express";
import middleware from "../controllers/middlewareV2.js";

import listShowsController from "../controllers/listShowsController.js";
import listDatesController from "../controllers/listDatesController.js";

import getCategoriesController from '../controllers/getCategoriesController.js';
import getPicturesController from "../controllers/getPicturesController.js";
import getLieuController from "../controllers/getLieuController.js";
import selectedImageController from '../controllers/selectedImageController.js';

import manageShowsController from "../controllers/manageShowsController.js";
import addShowController from "../controllers/addShowController.js";
import deleteShowController from "../controllers/deleteShowController.js";
import editShowByIdController from "../controllers/editShowByIdController.js";
import getShowByIdController from '../controllers/getShowByIdController.js';
import showController from '../controllers/showController.js';

import addDateController from "../controllers/addDateController.js";


import adminController from "../controllers/adminController.js";
import addAdminController from "../controllers/addAdminController.js";
import deleteAdminController from "../controllers/deleteAdminController.js";
import getAdminByIdController from "../controllers/getAdminByIdController.js";
import editAdminByIdController from "../controllers/editAdminByIdController.js";
import loginController from "../controllers/loginControllerV2.js";
import checkToken from '../controllers/checkToken.js';

const router = express.Router();



router.get("/getpictures", getPicturesController);
router.get("/getCategories", getCategoriesController);
router.get("/getLieu", middleware, getLieuController) ;
router.post("/selectedImage", selectedImageController);

router.get("/listshows", listShowsController);
router.post("/show", showController);
////ADMIN////
router.get("/manageshows", manageShowsController);
router.post("/addshow", addShowController);
router.post("/deleteShow", deleteShowController);
router.post("/getShowById", getShowByIdController);
router.post("/editShowById", editShowByIdController);


router.get("/listdates", listDatesController);
router.post("/adddate", addDateController);

router.get("/admin", adminController);
router.post("/addadmin", addAdminController);
router.post("/deleteAdmin", deleteAdminController);
router.post("/getAdminById", getAdminByIdController);
router.post("/editAdminById", editAdminByIdController);

router.post("/login", middleware, loginController) ;
router.get("/relogged", checkToken);


export default router;
