import express from "express";

/////////////////////////MIDDLEWARES/////////////////////
import middleware from "../controllers/middlewares/middleware.js";
import middlewareUploadFileMultiple from "../controllers/middlewares/middlewareUploadFileMultiple.js";
import middlewareUploadPdf from "../controllers/middlewares/middlewareUploadPdf.js";

/////////////////////////AFFICHAGE/////////////////////
import listShowsController from "../controllers/listShowsController.js";
import showController from '../controllers/showController.js';
import selectShowController from "../controllers/selectShowController.js";
import listDatesController from "../controllers/listDatesController.js";
import listProController from "../controllers/listProController.js";

//////////////////////ADMIN/////////////////////////////

/////////SHOWS///////////
import manageShowsController from "../controllers/admin-shows/manageShowsController.js";
import addShowController from "../controllers/admin-shows/addShowController.js";
import deletePictureController from "../controllers/admin-shows/deletePictureController.js";
import deleteShowController from "../controllers/admin-shows/deleteShowController.js";
import editShowByIdController from "../controllers/admin-shows/editShowByIdController.js";
import addShowPicturesController from "../controllers/admin-shows/addShowPicturesController.js";
import getShowByIdController from '../controllers/admin-shows/getShowByIdController.js';
import getCategoriesController from '../controllers/admin-shows/getCategoriesController.js';
import getPicturesController from "../controllers/admin-shows/getPicturesController.js";
import selectedImageController from '../controllers/admin-shows/selectedImageController.js';

/////////AGENDA///////////
import addDateController from "../controllers/admin-agenda/addDateController.js";
import deleteDateController from "../controllers/admin-agenda/deleteDateController.js";
import getLieuController from "../controllers/admin-agenda/getLieuController.js";

/////////PRO///////////
import addPdfController from "../controllers/admin-pro/addPdfController.js";

/////////USERS///////////
import adminController from "../controllers/admin-users/adminController.js";
import addAdminController from "../controllers/admin-users/addAdminController.js";
import deleteAdminController from "../controllers/admin-users/deleteAdminController.js";
import getAdminByIdController from "../controllers/admin-users/getAdminByIdController.js";
import editAdminByIdController from "../controllers/admin-users/editAdminByIdController.js";
import loginController from "../controllers/admin-users/loginController.js";
import checkToken from '../controllers/admin-users/checkToken.js';

const router = express.Router();

/////////////////AFFICHAGE/////////////////////
router.get("/listshows", listShowsController);
router.post("/show", showController);
router.get("/listdates", listDatesController);
router.get("/listpro", listProController);

///////////////ADMIN///////////////////

    ////SHOWS////
    router.get("/manageshows", manageShowsController);
    router.get("/selectshow", selectShowController);
    router.post("/deleteShow", deleteShowController);
    router.get("/getCategories", getCategoriesController);
    router.post("/addshow", middlewareUploadFileMultiple, addShowController);
    router.post("/addShowPictures", middlewareUploadFileMultiple, addShowPicturesController);
    router.post("/getShowById", getShowByIdController);
    router.post("/editShowById", editShowByIdController);
    router.post("/getpictures", getPicturesController);
    router.post("/deletePicture", deletePictureController);
    router.post("/selectedImage", selectedImageController);
    
    
    /////AGENDA//////
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
