import mongoose from "mongoose";
import constants from "../../constants";

let productSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        price: { type: Number },
        brand: { type: String },
        category: { type: String },
        thumbnail: { type: String },
        purchaseDetail: [{
            purchasedStatus: { type: String, default: constants.productPurchasedStatus.notPurchased },
            purchasedDate: { type: Date }
        }],
        createdOn: { type: Date },
        updatedOn: { type: Date },
        deletedOn: { type: Date },
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true
    }
);

export default productSchema;