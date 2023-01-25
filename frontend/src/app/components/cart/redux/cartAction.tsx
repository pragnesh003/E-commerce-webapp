export const CartMap = {
    GET_CART_LIST_START: 'GET_CART_LIST_START',
    GET_CART_LIST_SUCCESS: 'GET_CART_LIST_SUCCESS',
    GET_CART_LIST_ERROR: 'GET_CART_LIST_ERROR',
    UPDATE_PRODUCT_QUANTITY_START: 'UPDATE_PRODUCT_QUANTITY_START',
    UPDATE_PRODUCT_QUANTITY_SUCCESS: 'UPDATE_PRODUCT_QUANTITY_SUCCESS',
    UPDATE_PRODUCT_QUANTITY_ERROR: 'UPDATE_PRODUCT_QUANTITY_ERROR',
    REMOVE_PRODUCT_IN_CART_START: 'REMOVE_PRODUCT_IN_CART_START',
    REMOVE_PRODUCT_IN_CART_SUCCESS: 'REMOVE_PRODUCT_IN_CART_SUCCESS',
    REMOVE_PRODUCT_IN_CART_ERROR: 'REMOVE_PRODUCT_IN_CART_ERROR',
    REMOVE_ALL_PRODUCT_IN_CART_START: 'REMOVE_ALL_PRODUCT_IN_CART_START',
    REMOVE_ALL_PRODUCT_IN_CART_SUCCESS: 'REMOVE_ALL_PRODUCT_IN_CART_SUCCESS',
    REMOVE_ALL_PRODUCT_IN_CART_ERROR: 'REMOVE_ALL_PRODUCT_IN_CART_ERROR',
    SUBMIT_ORDER_START: 'SUBMIT_ORDER_START',
    SUBMIT_ORDER_SUCCESS: 'SUBMIT_ORDER_SUCCESS',
    SUBMIT_ORDER_ERROR: 'SUBMIT_ORDER_ERROR',
}

export const CartActions: any = {
    getCartListStart: (data: any) => ({ type: CartMap.GET_CART_LIST_START, payload: data }),
    getCartListSuccess: (data: any) => ({ type: CartMap.GET_CART_LIST_SUCCESS, payload: data }),
    getCartListError: (data: any) => ({ type: CartMap.GET_CART_LIST_ERROR, payload: data }),

    updateProductQuantityStart: (data: any) => ({ type: CartMap.UPDATE_PRODUCT_QUANTITY_START, payload: data }),
    updateProductQuantitySuccess: (data: any) => ({ type: CartMap.UPDATE_PRODUCT_QUANTITY_SUCCESS, payload: data }),
    updateProductQuantityError: (data: any) => ({ type: CartMap.UPDATE_PRODUCT_QUANTITY_ERROR, payload: data }),

    removeProductInCartStart: (data: any) => ({ type: CartMap.REMOVE_PRODUCT_IN_CART_START, payload: data }),
    removeProductInCartSuccess: (data: any) => ({ type: CartMap.REMOVE_PRODUCT_IN_CART_SUCCESS, payload: data }),
    removeProductInCartError: (data: any) => ({ type: CartMap.REMOVE_PRODUCT_IN_CART_ERROR, payload: data }),

    removeAllProductInCartStart: (data: any) => ({ type: CartMap.REMOVE_ALL_PRODUCT_IN_CART_START, payload: data }),
    removeAllProductInCartSuccess: (data: any) => ({ type: CartMap.REMOVE_ALL_PRODUCT_IN_CART_SUCCESS, payload: data }),
    removeAllProductInCartError: (data: any) => ({ type: CartMap.REMOVE_ALL_PRODUCT_IN_CART_ERROR, payload: data }),

    submitOrderStart: (data: any) => ({ type: CartMap.SUBMIT_ORDER_START, payload: data }),
    submitOrderSuccess: (data: any) => ({ type: CartMap.SUBMIT_ORDER_SUCCESS, payload: data }),
    submitOrderError: (data: any) => ({ type: CartMap.SUBMIT_ORDER_ERROR, payload: data }),
}