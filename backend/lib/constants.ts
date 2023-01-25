// Messages
let messages = {
    Success: "Get details successfully",
    dataNotFound: "Data not found",
    internalServerError: "Internal server error. Please try after some time",
    statusTrue: true,
    statusFalse: false,
};

// DB model reference 
const dbModelRef = {
    product: "product",
    cart: "cart",
    order: "order"
};

// Response code
const code = {
    success: 200,
    FRBDN: 403,
    internalServerError: 500,
    dataNotFound: 404,
    badRequest: 400,
    reqTimeOut: 408,
    unAuthorized: 401,
};

// Product purchased type
const productPurchasedStatus = {
    notPurchased: "Not Purchased",
    purchased: "Purchased",
    cancelled: "Cancelled"
}

export default {
    messages,
    dbModelRef,
    code,
    productPurchasedStatus
}