import express from "express";
import middleware from "../controllers/middlewareV2.js";
import middlewareUploadFileMultiple from "../controllers/middlewareUploadFileMultiple.js";
import middlewareUploadPdf from "../controllers/middlewareUploadPdf.js";

/////////////////////////AFFICHAGE/////////////////////
import listShowsController from "../controllers/listShowsController.js";
import showController from '../controllers/showController.js';
import listDatesController from "../controllers/listDatesController.js";
import selectShowController from "../controllers/selectShowController.js";
import listProController from "../controllers/listProController.js";

//////////////////////ADMIN/////////////////////////////

/////////SHOWS///////////
import manageShowsController from "../controllers/manageShowsController.js";
import addShowController from "../controllers/addShowController.js";
import deleteShowController from "../controllers/deleteShowController.js";
import editShowByIdController from "../controllers/editShowByIdController.js";
import getShowByIdController from '../controllers/getShowByIdController.js';
import getCategoriesController from '../controllers/getCategoriesController.js';
import getPicturesController from "../controllers/getPicturesController.js";
import selectedImageController from '../controllers/selectedImageController.js';

/////////AGENDA///////////
import manageDatesController from "../controllers/manageDatesController.js";
import addDateController from "../controllers/addDateController.js";
import deleteDateController from "../controllers/deleteDateController.js";
import getLieuController from "../controllers/getLieuController.js";

/////////PRO///////////
import addPdfController from "../controllers/addPdfController.js";
// import deletePdfController from "../controllers/deletePDFController.js";


/////////USERS///////////
import adminController from "../controllers/adminController.js";
import addAdminController from "../controllers/addAdminController.js";
import deleteAdminController from "../controllers/deleteAdminController.js";
import getAdminByIdController from "../controllers/getAdminByIdController.js";
import editAdminByIdController from "../controllers/editAdminByIdController.js";
import loginController from "../controllers/loginControllerV2.js";
import checkToken from '../controllers/checkToken.js';

const router = express.Router();

/////////////////AFFICHAGE/////////////////////
router.get("/listshows", listShowsController);
router.post("/show", showController);
router.get("/listdates", listDatesController);
router.get("/selectshow", selectShowController);
router.get("/listpro", listProController);

///////////////ADMIN///////////////////

////SHOWS////
router.get("/manageshows", manageShowsController);
router.post("/addshow", middlewareUploadFileMultiple, addShowController);
router.post("/editShowById", middlewareUploadFileMultiple, editShowByIdController);
router.post("/deleteShow", deleteShowController);
router.post("/getShowById", getShowByIdController);
router.get("/getCategories", getCategoriesController);
router.get("/getpictures", getPicturesController);
router.post("/selectedImage", selectedImageController);


/////AGENDA//////
router.get("/managedates", manageDatesController);
router.post("/adddate", addDateController);
router.post("/deletedate", deleteDateController);
router.get("/getLieu", middleware, getLieuController) ;


/////////PRO////////////
router.post("/addpdf", middlewareUploadPdf, addPdfController);
// router.post("/deletePdf", deletePdfController);

//////////USER//////////////////
router.get("/admin", adminController);
router.post("/addadmin", addAdminController);
router.post("/deleteAdmin", deleteAdminController);
router.post("/getAdminById", getAdminByIdController);
router.post("/editAdminById", editAdminByIdController);

router.post("/login", middleware, loginController) ;
router.get("/relogged", checkToken);


export default router;
