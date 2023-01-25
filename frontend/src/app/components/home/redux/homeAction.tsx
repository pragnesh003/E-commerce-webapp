export const HomeMap = {
    GET_PRODUCT_LIST_START: 'GET_PRODUCT_LIST_START',
    GET_PRODUCT_LIST_SUCCESS: 'GET_PRODUCT_LIST_SUCCESS',
    GET_PRODUCT_LIST_ERROR: 'GET_PRODUCT_LIST_ERROR',
    ADD_PRODUCT_IN_CART_START: 'ADD_PRODUCT_IN_CART_START',
    ADD_PRODUCT_IN_CART_SUCCESS: 'ADD_PRODUCT_IN_CART_SUCCESS',
    ADD_PRODUCT_IN_CART_ERROR: 'ADD_PRODUCT_IN_CART_ERROR',
}

export const HomeActions: any = {
    getProductListStart: (data: any) => ({ type: HomeMap.GET_PRODUCT_LIST_START, payload: data }),
    getProductListSuccess: (data: any) => ({ type: HomeMap.GET_PRODUCT_LIST_SUCCESS, payload: data }),
    getProductListError: (data: any) => ({ type: HomeMap.GET_PRODUCT_LIST_ERROR, payload: data }),

    addProductInCartStart: (data: any) => ({ type: HomeMap.ADD_PRODUCT_IN_CART_START, payload: data }),
    addProductInCartSuccess: (data: any) => ({ type: HomeMap.ADD_PRODUCT_IN_CART_SUCCESS, payload: data }),
    addProductInCartError: (data: any) => ({ type: HomeMap.ADD_PRODUCT_IN_CART_ERROR, payload: data }),
}