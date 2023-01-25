// ------------------------------------- Files and packages import start -------------------------------
import express from "express";
import cartController from "./cartController";
// ------------------------------------- Files and packages import end ---------------------------------

let router = express.Router();

/**
 *  getCartList()
 * * Get cart List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/getCartList")
    .get(cartController.getCartList)

/**
 *  addItemInCart()
 * * Add item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/addItemInCart/:id")
    .post(cartController.addItemInCart)

/**
 *  updateItemQuantity()
 * * Update item quantity
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/updateItemQuantity/:id")
    .post(cartController.updateItemQuantity)

/**
 *  removeItemInCart()
 * * Remove item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/removeItemInCart/:id")
    .delete(cartController.removeItemInCart)

/**
 *  removeAllItemInCart()
 * * Remove all item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
router.route("/removeAllItemInCart")
    .delete(cartController.removeAllItemInCart)


// Export
export default router;  