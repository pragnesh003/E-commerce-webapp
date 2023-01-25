/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import CardIcon from '../../../theme/components/card/CardIcon';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getProductListAsync, addProductInCartAsync } from './redux/homeApi';

const Home = () => {

    const { productList } = useSelector((state: any) => state.home, shallowEqual);
    const dispatch: any = useDispatch();

    const [categoryFilterData, setCategoryFilterData] = useState(null)
    const [priceFilterData, setPriceFilterData] = useState({ startPrice: 0, endPrice: 0 })
    const categoryList = ['smartphones', 'laptops', 'fragrances', 'skincare', 'Saaf & Khaas', 'groceries', 'Boho Decor', 'Flying Wooden', 'LED Lights', 'luxury palace', 'Golden']

    useEffect(() => {
        dispatch(getProductListAsync(categoryFilterData, priceFilterData));
    }, [categoryFilterData, priceFilterData]);

    // Add product in cart
    const addProductInCart = (id: any) => {
        dispatch(addProductInCartAsync(id));
    }

    //  Handle price filter
    const handlePriceFilter = (e: any) => {
        const id = e.target.value;
        const filterData = priceFilter.find((ele: any) => parseInt(ele.id) === parseInt(id));
        setPriceFilterData({
            startPrice: filterData?.startPrice ? filterData?.startPrice : 0,
            endPrice: filterData?.endPrice ? filterData?.endPrice : 0,
        })
    }

    // Price filter 
    const priceFilter = [
        { id: 1, label: "0 - 100", startPrice: 0, endPrice: 100 },
        { id: 2, label: "100 - 200", startPrice: 100, endPrice: 200 },
        { id: 3, label: "200 - 300", startPrice: 200, endPrice: 500 },
        { id: 4, label: "500 - 1000", startPrice: 500, endPrice: 1000 },
        { id: 5, label: "1000 - 2000", startPrice: 1000, endPrice: 2000 },
        { id: 6, label: "2000 or more", startPrice: 2000, endPrice: 0 },
    ]

    //  Handle category filter
    const handleCategoryFilter = (e: any) => {
        const category = e.target.value;
        setCategoryFilterData(category)
    }

    return (
        <React.Fragment>

            <div className="col-2 d-flex justify-content-end mt-2 mx-2">
                <select className="form-select mw-180 float-start" aria-label="Default select" onChange={handleCategoryFilter}>
                    <option>Category</option>
                    {
                        categoryList?.map((ele: any, ind: any) => {
                            return (
                                <option key={ind} value={ele}>{ele}</option>
                            )
                        })
                    }
                </select>
                <select className="form-select mw-180 float-start mx-2" aria-label="Default select" onChange={handlePriceFilter}>
                    <option value={0}>Price</option>
                    {
                        priceFilter?.map((ele: any, ind: any) => {
                            return (
                                <option key={ind} value={ele.id}>{ele.label}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="carousel-item active">
                <div className="row g-3 mt-2">
                    {
                        productList?.records?.map((product: any, key: any) => {
                            return (
                                <div key={key} className="col-md-3">
                                    <CardIcon id={product._id} title={product.title} description={product.description} price={product.price} addProductInCart={addProductInCart}>
                                        <img src={product.thumbnail} alt={product.title} width="80" height="80" />
                                    </CardIcon>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home