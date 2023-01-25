// Route File import
import productService from '../modules/product/productService';
import productRoute from '../modules/product/productRoute';
import cartRoute from '../modules/cart/cartRoute';
import orderRoute from '../modules/order/orderRoute';

// Export API Routes
export default function (app: any) {

    // Add products
    productService.addProduct();

    app.get("/", (req: any, res: any) => {
        res.sendStatus(200);
    });

    // For API
    app.use(`/api/product`, productRoute);
    app.use(`/api/cart`, cartRoute);
    app.use(`/api/order`, orderRoute);
}