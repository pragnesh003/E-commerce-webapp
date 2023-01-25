// ------------------------------------- Files and packages import start -------------------------------
import mongoose from "mongoose";   // Connect db using mongoose
import BaseDao from "../../dao/baseDao";
import { requestResponse } from "../../handlers/responseHandlers";
import constants from "../../constants";
import moduleConst from "./cartConstants";
import cartSchema from "./cartModel";
// ------------------------------------- Files and packages import end ---------------------------------

// Mongoose promises
mongoose.Promise = global.Promise;
let db: any = global;

/**
 *  getCartList()
 * * Get cart List
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
async function getCartList(req: any, res: any) {
    let cartRead = db['readUserConnection'].model(constants.dbModelRef.cart, cartSchema);
    let cartReadDao = new BaseDao(cartRead);

    let aggregate: any =
        [
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productData",
                }
            },
            { $unwind: "$productData" },
            {
                $project: {
                    productId: 1,
                    quantity: 1,
                    title: "$productData.title",
                    description: "$productData.description",
                    brand: "$productData.brand",
                    category: "$productData.category",
                    price: "$productData.price",
                    thumbnail: "$productData.thumbnail",
                }
            }
        ];

    let productList = await cartReadDao.aggregate(aggregate);
    if (productList) {
        let response = {
            records: productList
        }
        return requestResponse(constants.code.success, moduleConst.messages.getCartList, response);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithGetCartList, {});
    }
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
async function addItemInCart(req: any, res: any) {
    let cartWrite = db['writeUserConnection'].model(constants.dbModelRef.cart, cartSchema);
    let cartWriteDao = new BaseDao(cartWrite);

    const productId = req.params.id;

    let productResult = await cartWriteDao.save({ productId: productId });
    if (productResult) {
        return requestResponse(constants.code.success, moduleConst.messages.productAdd, productResult);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithAddProduct, {});
    }
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
async function updateItemQuantity(req: any, res: any) {
    let cartWrite = db['writeUserConnection'].model(constants.dbModelRef.cart, cartSchema);
    let cartWriteDao = new BaseDao(cartWrite);

    const cartId = req.params.id;
    const query = {
        _id: cartId
    }

    const updateObj = {
        $set: { quantity: req.query.quantity }
    }

    console.log(query)
    let productResult = await cartWriteDao.findOneAndUpdate(query, updateObj, null);
    if (productResult) {
        return requestResponse(constants.code.success, moduleConst.messages.productAdd, productResult);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithAddProduct, {});
    }
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
async function removeItemInCart(req: any, res: any) {
    let cartWrite = db['writeUserConnection'].model(constants.dbModelRef.cart, cartSchema);
    let cartWriteDao = new BaseDao(cartWrite);

    const cartId = req.params.id;
    let cartResult = await cartWriteDao.findByIdAndRemove({ _id: cartId });
    if (cartResult) {
        return requestResponse(constants.code.success, moduleConst.messages.productRemove, cartResult);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithRemoveProduct, {});
    }
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
async function removeAllItemInCart(req: any, res: any) {
    let cartWrite = db['writeUserConnection'].model(constants.dbModelRef.cart, cartSchema);
    let cartWriteDao = new BaseDao(cartWrite);

    let cartResult = await cartWriteDao.remove({});
    if (cartResult) {
        return requestResponse(constants.code.success, moduleConst.messages.productRemove, cartResult);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithRemoveProduct, {});
    }
}

export default {
    getCartList,
    addItemInCart,
    updateItemQuantity,
    removeItemInCart,
    removeAllItemInCart
}