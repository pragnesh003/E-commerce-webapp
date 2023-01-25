import mongoose from "mongoose";
import constants from "../../constants";

let productSchema = new mongoose.Schema(
    {
        productId: { type: mongoose.Types.ObjectId, ref: constants.dbModelRef.product },
        quantity: { type: Number, default: 1 },
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