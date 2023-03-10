// ------------------------------------- Files and packages import start -------------------------------
import mongoose from "mongoose";   // Connect db using mongoose
import BaseDao from "../../dao/baseDao";
import { requestResponse } from "../../handlers/responseHandlers";
import constants from "../../constants";
import moduleConst from "./productConstants";
import productSchema from "./productModel";
// ------------------------------------- Files and packages import end ---------------------------------

// Mongoose promises
mongoose.Promise = global.Promise;
let db: any = global;

/**
 *  getProductList()
 * * Get Product List 
 * @param {*} req
 * @param {*} res
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
async function getProductList(req: any, res: any) {
    let productRead = db['readUserConnection'].model(constants.dbModelRef.product, productSchema);
    let productReadDao = new BaseDao(productRead);

    let queryParams: any = req.query;
    let query: any = {
        isDeleted: false,
    }
    if (queryParams?.category && queryParams.category != 'null') {
        query["category"] = queryParams.category;
    }

    if (parseInt(queryParams?.startPrice) || parseInt(queryParams?.endPrice)) {
        if (parseInt(queryParams?.startPrice) && parseInt(queryParams?.endPrice)) {
            query["price"] = { $gte: parseInt(queryParams.startPrice), $lte: parseInt(queryParams.endPrice) };
        } else if (parseInt(queryParams?.startPrice)) {
            query["price"] = { $gte: parseInt(queryParams.startPrice) };
        } else if (parseInt(queryParams?.endPrice)) {
            query["price"] = { $lte: parseInt(queryParams.endPrice) };
        }
    }
    let productList = await productReadDao.find(query);
    if (productList) {
        let response = {
            records: productList
        }
        return requestResponse(constants.code.success, moduleConst.messages.getProductList, response);
    } else {
        return requestResponse(constants.code.badRequest, moduleConst.messages.issueWithGetProductList, {});
    }
}

/**
 *  addProducts()
 * * Add Products
 * Created Date : 24 Jan 2023 
 * Last updated :
 * Developer : Pragnesh
 */
async function addProduct() {
    let productRead = db['readUserConnection'].model(constants.dbModelRef.product, productSchema);
    let productReadDao = new BaseDao(productRead);
    let productWrite = db['writeUserConnection'].model(constants.dbModelRef.product, productSchema);
    let productWriteDao = new BaseDao(productWrite);

    const products = [
        {
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        },
        {
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
        },
        {
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        },
        {
            "title": "Huawei P30",
            "description": "Huawei???s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
        },
        {
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "brand": "APPle",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png"
        },
        {
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
        },
        {
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
        },
        {
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey ??? 1 Year Warranty",
            "price": 2100,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        },
        {
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "brand": "HP Pavilion",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
        },
        {
            "title": "perfume Oil",
            "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
            "price": 13,
            "brand": "Impression of Acqua Di Gio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
        },
        {
            "title": "Brown Perfume",
            "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
            "price": 40,
            "brand": "Royal_Mirage",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
        },
        {
            "title": "Fog Scent Xpressio Perfume",
            "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
            "price": 13,
            "brand": "Fog Scent Xpressio",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp"
        },
        {
            "title": "Non-Alcoholic Concentrated Perfume Oil",
            "description": "Original Al Munakh?? by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
            "price": 120,
            "brand": "Al Munakh",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
        },
        {
            "title": "Eau De Perfume Spray",
            "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
            "price": 30,
            "brand": "Lord - Al-Rehab",
            "category": "fragrances",
            "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
        },
        {
            "title": "Hyaluronic Acid Serum",
            "description": "L'Or????al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
            "price": 19,
            "brand": "L'Oreal Paris",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
        },
        {
            "title": "Tree Oil 30ml",
            "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
            "price": 12,
            "brand": "Hemani Tea",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
        },
        {
            "title": "Oil Free Moisturizer 100ml",
            "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
            "price": 40,
            "brand": "Dermive",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
        },
        {
            "title": "Skin Beauty Serum.",
            "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
            "price": 46,
            "brand": "ROREC White Rice",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
        },
        {
            "title": "Freckle Treatment Cream- 15gm",
            "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
            "price": 70,
            "brand": "Fair & Clear",
            "category": "skincare",
            "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
        },
        {
            "title": "- Daal Masoor 500 grams",
            "description": "Fine quality Branded Product Keep in a cool and dry place",
            "price": 20,
            "brand": "Saaf & Khaas",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png"
        },
        {
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
            "price": 14,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg"
        },
        {
            "title": "Orange Essence Food Flavou",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "price": 14,
            "brand": "Baking Food Items",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
        },
        {
            "title": "cereals muesli fruit nuts",
            "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
            "price": 46,
            "brand": "fauji",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
        },
        {
            "title": "Gulab Powder 50 Gram",
            "description": "Dry Rose Flower Powder Gulab Powder 50 Gram ??? Treats Wounds",
            "price": 70,
            "brand": "Dry Rose",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
        },
        {
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "price": 41,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
        },
        {
            "title": "Flying Wooden Bird",
            "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
            "price": 51,
            "brand": "Flying Wooden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp"
        },
        {
            "title": "3D Embellishment Art Lamp",
            "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
            "price": 20,
            "brand": "LED Lights",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
        },
        {
            "title": "Handcraft Chinese style",
            "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
            "price": 60,
            "brand": "luxury palace",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp"
        },
        {
            "title": "Key Holder",
            "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
            "price": 30,
            "brand": "Golden",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
        }
    ]

    const productCountGetQuery = {
        isDeleted: false
    }
    const productCount = await productReadDao.count(productCountGetQuery);
    if (!productCount) {
        await productWriteDao.insertMany(products).then((result: any) => {
            if (result) {
                console.log("Products add successfully.");
            }
        })
    }
}

export default {
    getProductList,
    addProduct
}