// ------------------------------------- Files and packages import start -------------------------------
import service from "./orderService";
import { sendSuccess, sendError } from "../../handlers/responseHandlers";
// ------------------------------------- Files and packages import end ---------------------------------

/**
 *  getOrderList()
 * * Get Order List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function getOrderList(req: any, res: any) {
    return service.getOrderList(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

/**
 *  submitOrder()
 * * Submit Order
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function submitOrder(req: any, res: any) {
    return service.submitOrder(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log(err)
        sendError(res, err);
    });
}

export default {
    getOrderList,
    submitOrder,
}