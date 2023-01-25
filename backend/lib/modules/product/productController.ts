// ------------------------------------- Files and packages import start -------------------------------
import service from "./productService";
import { sendSuccess, sendError } from "../../handlers/responseHandlers";
// ------------------------------------- Files and packages import end ---------------------------------

/**
 *  getProductList()
 * * Get Product List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
function getProductList(req: any, res: any) {
    return service.getProductList(req, res).then((result: any) => {
        sendSuccess(res, result);
    }).catch((err: any) => {
        console.log("Get List Err: ", err);
        sendError(res, err);
    });
}

export default {
    getProductList,
}