import React from 'react'

const OrderCard = (props: any) => {

    let orderDate: any = new Date(props.orderDetail.createdAt).toLocaleString();

    return (
        <div className="col-md-6">
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-3 text-center">
                        <img src={props.orderDetail.thumbnail} className="img-fluid" alt={props.orderDetail.title} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-header">
                            <div className="small">
                                <span className="border bg-secondary rounded-left px-2 text-white">
                                    Date
                                </span>
                                <span className="border bg-white rounded-right px-2">
                                    {orderDate}
                                </span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6>
                                {props.orderDetail.title}
                            </h6>
                            <span>
                                {props.orderDetail.description}
                            </span>
                            <div className="small">
                                <span className="text-muted me-2">Price:</span>
                                <span className="me-3">{props.orderDetail.price * props.orderDetail.quantity}</span>
                                <span className="text-muted me-2">Quantity:</span>
                                <span className="me-3">{props.orderDetail.quantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard