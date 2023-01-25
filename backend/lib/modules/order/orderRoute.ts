// ------------------------------------- Files and packages import start -------------------------------
import express from "express";
import orderController from "./orderController";
// ------------------------------------- Files and packages import end ---------------------------------

let router = express.Router();

/**
 *  getOrderList()
 * * Get Order List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/getOrderList")
    .get(orderController.getOrderList)

/**
 *  submitOrder()
 * * Submit Order
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/submitOrder")
    .post(orderController.submitOrder)


// Export
export default router;  