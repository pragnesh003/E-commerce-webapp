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
        quantity: { type: Number },
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