// ------------------------------------- Files and packages import start -------------------------------
import service from "./cartService";
import { sendSuccess, sendError } from "../../handlers/responseHandlers";
// ------------------------------------- Files and packages import end ---------------------------------

/**
 *  getCartList()
 * * Get cart List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function getCartList(req: any, res: any) {
    return service.getCartList(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

/**
 *  addItemInCart()
 * * Add item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function addItemInCart(req: any, res: any) {
    return service.addItemInCart(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

/**
 *  updateItemQuantity()
 * * Update item quantity
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function updateItemQuantity(req: any, res: any) {
    return service.updateItemQuantity(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

/**
 *  removeItemInCart()
 * * Remove item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function removeItemInCart(req: any, res: any) {
    return service.removeItemInCart(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

/**
 *  removeAllItemInCart()
 * * Remove all item in cart
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function removeAllItemInCart(req: any, res: any) {
    return service.removeAllItemInCart(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

export default {
    getCartList,
    addItemInCart,
    updateItemQuantity,
    removeItemInCart,
    removeAllItemInCart
}