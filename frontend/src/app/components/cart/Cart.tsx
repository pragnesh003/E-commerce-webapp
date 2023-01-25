/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { getCartListAsync, removeProductInCartAsync, updateProductQuantityAsync, submitOrderAsync, removeAllProductInCartAsync } from './redux/cartApi';

const Cart = () => {

    const { cartList } = useSelector((state: any) => state.cart, shallowEqual);
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        dispatch(getCartListAsync())
    }, [])

    useEffect(() => {
        setTotalPrice(0);
        if (cartList?.records?.length) {
            let total = 0;
            cartList?.records.map((ele: any) => {
                total = total + ele.price;
            });
            setTotalPrice(total);
        }
    }, [cartList])

    // Remove item in cart
    const removeItemInCart = (id: any) => {
        dispatch(removeProductInCartAsync(id));
        dispatch(getCartListAsync())
    }

    // Update product quantity 
    const updateQuantity = (id: any, quantity: any) => {
        dispatch(updateProductQuantityAsync(id, quantity));
        dispatch(getCartListAsync())
    }

    // Submit order
    const submitOrder = () => {
        dispatch(submitOrderAsync(cartList?.records));
        dispatch(removeAllProductInCartAsync());
        navigate("/");
    }

    return (
        <React.Fragment>
            <div className="bg-secondary border-top p-4 text-white mb-3">
                <h1 className="display-6">Shopping Cart</h1>
            </div>
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead className="text-muted">
                                        <tr className="small text-uppercase">
                                            <th scope="col">Product</th>
                                            <th scope="col">
                                                Quantity
                                            </th>
                                            <th scope="col">
                                                Price
                                            </th>
                                            <th scope="col" className="text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartList?.records?.map((productDetail: any, ind: any) => {
                                                return (
                                                    <tr key={ind}>
                                                        <td>
                                                            <div className="row">
                                                                <div className="col-3 d-none d-md-block">
                                                                    <img src={productDetail.thumbnail} width="80" alt={productDetail.title} />
                                                                </div>
                                                                <div className="col">
                                                                    {productDetail.title}
                                                                    <p className="small text-muted">
                                                                        {productDetail.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="input-group input-group-sm mw-100">
                                                                {
                                                                    productDetail.quantity > 1 &&
                                                                    <button className="btn btn-primary text-white" type="button" onClick={(e: any) => updateQuantity(productDetail._id, productDetail.quantity - 1)}>
                                                                        <FontAwesomeIcon icon={faMinus} />
                                                                    </button>
                                                                }
                                                                <input type="text" className="form-control" value={productDetail.quantity} />
                                                                <button className="btn btn-primary text-white" type="button" onClick={(e: any) => updateQuantity(productDetail._id, productDetail.quantity + 1)}>
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <var className="price">${productDetail.price * productDetail.quantity}</var>
                                                            <td className="text-end">
                                                                <button className="btn btn-sm btn-outline-danger" onClick={(e: any) => removeItemInCart(productDetail._id)}>
                                                                    <IconTrash className="i-va" />
                                                                </button>
                                                            </td>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                                <div className="card-footer">
                                    {
                                        cartList?.records?.length !== 0 &&
                                        <button className="btn btn-primary float-end" onClick={submitOrder}>
                                            Make Purchase <IconChevronRight className="i-va" />
                                        </button>
                                    }
                                    <Link to="/" className="btn btn-secondary">
                                        <IconChevronLeft className="i-va" />Continue shopping
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <dl className="row border-bottom">
                                            <dt className="col-6">Total price:</dt>
                                            <dd className="col-6 text-end">${totalPrice}</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </React.Fragment >
    )
}

export default Cart; 