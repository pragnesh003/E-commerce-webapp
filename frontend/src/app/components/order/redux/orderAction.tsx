export const OrderMap = {
    GET_ORDER_LIST_START: 'GET_ORDER_LIST_START',
    GET_ORDER_LIST_SUCCESS: 'GET_ORDER_LIST_SUCCESS',
    GET_ORDER_LIST_ERROR: 'GET_ORDER_LIST_ERROR',
}

export const OrderActions: any = {
    getOrderListStart: (data: any) => ({ type: OrderMap.GET_ORDER_LIST_START, payload: data }),
    getOrderListSuccess: (data: any) => ({ type: OrderMap.GET_ORDER_LIST_SUCCESS, payload: data }),
    getOrderListError: (data: any) => ({ type: OrderMap.GET_ORDER_LIST_ERROR, payload: data }),
}