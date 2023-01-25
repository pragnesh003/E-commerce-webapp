import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./components/home/Home";
import InternalServerErrorView from "./components/pages/500";
import NotFoundView from "./components/pages/404";
import Header from "./components/pages/Header";
import Cart from './components/cart/Cart';
import Order from './components/order/Order';

const Routing = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/500" element={<InternalServerErrorView />} />
                    <Route path="*" element={<NotFoundView />} />
                </Routes>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default Routing