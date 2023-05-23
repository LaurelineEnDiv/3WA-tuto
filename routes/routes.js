import express from "express";

/////////////////////////MIDDLEWARES/////////////////////
import middleware from "../controllers/middlewares/middleware.js";
import middlewareUploadFileMultiple from "../controllers/middlewares/middlewareUploadFileMultiple.js";
import middlewareUploadPdf from "../controllers/middlewares/middlewareUploadPdf.js";

/////////////////////////AFFICHAGE/////////////////////
import listTeamController from "../controllers/listTeamController.js";
import listContactController from "../controllers/listContactController.js";
import listShowsController from "../controllers/listShowsController.js";
import showController from '../controllers/showController.js';
import selectShowController from "../controllers/selectShowController.js";
import listDatesController from "../controllers/listDatesController.js";
import listProController from "../controllers/listProController.js";
import homeTextController from "../controllers/homeTextController.js";
import compagnieTextController from "../controllers/compagnieTextController.js";


//////////////////////ADMIN/////////////////////////////

/////////TEXTES//////////
import editTextByIdController from "../controllers/admin-text/editTextByIdController.js";
import getTextByIdController from '../controllers/admin-text/getTextByIdController.js';
import manageTextController from "../controllers/admin-text/manageTextController.js";
/////////TEAM///////////
import addTeamMemberController from "../controllers/admin-team/addTeamMemberController.js";
import deleteTeamMemberController from "../controllers/admin-team/deleteTeamMemberController.js";
import editTeamMemberByIdController from "../controllers/admin-team/editTeamMemberByIdController.js";
import getTeamMemberByIdController from '../controllers/admin-team/getTeamMemberByIdController.js';
/////////SHOWS///////////
import manageShowsController from "../controllers/admin-shows/manageShowsController.js";
import addShowController from "../controllers/admin-shows/addShowController.js";
import deletePictureController from "../controllers/admin-shows/deletePictureController.js";
import deleteShowController from "../controllers/admin-shows/deleteShowController.js";
import editShowByIdController from "../controllers/admin-shows/editShowByIdController.js";
import addShowPicturesController from "../controllers/admin-shows/addShowPicturesController.js";
import getShowByIdController from '../controllers/admin-shows/getShowByIdController.js';
import getPicturesController from "../controllers/admin-shows/getPicturesController.js";
import selectedImageController from '../controllers/admin-shows/selectedImageController.js';

/////////AGENDA///////////
import addDateController from "../controllers/admin-agenda/addDateController.js";
import deleteDateController from "../controllers/admin-agenda/deleteDateController.js";
import getLieuController from "../controllers/admin-agenda/getLieuController.js";

/////////PRO///////////
import addDiffController from "../controllers/admin-pro/addDiffController.js";
import addFtController from "../controllers/admin-pro/addFtController.js";
import deleteDiffPdfController from "../controllers/admin-pro/deleteDiffPdfController.js";
import deleteFtPdfController from "../controllers/admin-pro/deleteFtPdfController.js";
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
router.get("/listteam", listTeamController);
router.get("/listcontact", listContactController);
router.get("/listshows", listShowsController);
router.post("/show", showController);
router.get("/listdates", listDatesController);
router.get("/listpro", listProController);
router.get("/hometext", homeTextController);
router.get("/compagnietext", compagnieTextController);

///////////////ADMIN///////////////////
    ////TEXTES////
    router.get("/managetext", manageTextController);
    router.post("/editTextById", editTextByIdController);
    router.post("/getTextById", getTextByIdController);
    ////TEAM////
    router.post("/addteammember", middlewareUploadFileMultiple, addTeamMemberController);
    router.post("/deleteTeamMember", deleteTeamMemberController);
    router.post("/editTeamMemberById", editTeamMemberByIdController);
    router.post("/getTeamMemberById", getTeamMemberByIdController);

    ////SHOWS////
    router.get("/manageshows", manageShowsController);
    router.get("/selectshow", selectShowController);
    router.post("/deleteShow", deleteShowController);
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
    router.post("/adddiff", middlewareUploadPdf, addDiffController);
    router.post("/addft", middlewareUploadPdf, addFtController);
    router.post("/deleteDiffPdf", deleteDiffPdfController);
    router.post("/deleteFtPdf", deleteFtPdfController);
    
    //////////USER//////////////////
    router.get("/admin", adminController);
    router.post("/addadmin", addAdminController);
    router.post("/deleteAdmin", deleteAdminController);
    router.post("/getAdminById", getAdminByIdController);
    router.post("/editAdminById", editAdminByIdController);
    
    router.post("/login", middleware, loginController) ;
    router.get("/relogged", checkToken);


export default router;
