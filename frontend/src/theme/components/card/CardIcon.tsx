import React from "react";
import "./Card.css"

const CardIcon = (props: any) => {

    const handleOnClick = () => {
        props.addProductInCart(props.id);
    }

    return (
        <div className="card text-center">
            <div className="card-body">
                {props.children}
                <h6 className="card-title text-capitalize">{props.title}</h6>
                <div className="card-text text-success">{props.description}</div>
                <small className="price">${props.price}</small>
                <button className="btn btn-sm btn-outline-primary mx-2" onClick={handleOnClick}>Add to cart</button>
            </div>
        </div >
    );
};

export default CardIcon;
