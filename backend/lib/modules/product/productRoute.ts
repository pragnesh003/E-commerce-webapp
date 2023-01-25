// ------------------------------------- Files and packages import start -------------------------------
import express from "express";
import productController from "./productController";
// ------------------------------------- Files and packages import end ---------------------------------

let router = express.Router();

/**
 *  getProductList()
 * * Get Product List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/getProductList")
    .get(productController.getProductList)


// Export
export default router;  