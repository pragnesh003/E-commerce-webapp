import { body } from 'express-validator/check';
// ------------------------------------- Files and packages import start -------------------------------
import mongoose from "mongoose";   // Connect db using mongoose
import BaseDao from "../../dao/baseDao";
import { requestResponse } from "../../handlers/responseHandlers";
import constants from "../../constants";
import moduleConst from "./orderConstants";
import orderSchema from "./orderModel";
// ------------------------------------- Files and packages import end ---------------------------------

// Mongoose promises
mongoose.Promise = global.Promise;
let db: any = global;

/**
 *  getOrderList()
 * * Get Order List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
async function getOrderList(req: any, res: any) {
    let orderRead = db['readUserConnection'].model(constants.dbModelRef.order, orderSchema);
    let orderReadDao = new BaseDao(orderRead);

    let query = {
        isDeleted: false,
    }

    let orderList = await orderReadDao.find(query);
    if (orderList) {
        let response = {
            records: orderList
        }
        return requestResponse(constants.code.success, moduleConst.messages.getOrderList, response);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithGetOrderList, {});
    }
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
async function submitOrder(req: any, res: any) {
    let orderWrite = db['writeUserConnection'].model(constants.dbModelRef.order, orderSchema);
    let orderWriteDao = new BaseDao(orderWrite);

    const orders: any = req.body;

    return await orderWriteDao.insertMany(orders).then((result: any) => {
        if (result) {
            return requestResponse(constants.code.success, moduleConst.messages.orderSubmit, result);
        } else {
            return requestResponse(constants.code.dataNotFound, moduleConst.messages.issueWithOrderSubmit, {});
        }
    })
}

export default {
    getOrderList,
    submitOrder
}