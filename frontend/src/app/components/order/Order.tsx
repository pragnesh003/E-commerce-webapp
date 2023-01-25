/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getOrderListAsync } from './redux/orderApi';
import OrderCard from '../../../theme/components/card/OrderCard';

const Order = () => {

    const { orderList } = useSelector((state: any) => state.order, shallowEqual);
    const dispatch: any = useDispatch();

    useEffect(() => {
        dispatch(getOrderListAsync())
    }, []);

    return (
        <div className="container mb-3">
            <h4 className="my-3">Orders</h4>
            <div className="row g-3">
                {
                    orderList?.records?.map((orderDetail: any, index: any) => {
                        return (
                            <OrderCard key={index} orderDetail={orderDetail} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Order; 