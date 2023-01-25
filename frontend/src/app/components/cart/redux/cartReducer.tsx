import { CartMap } from './cartAction';

const initState = {
    cartList: {},
}

export function reducer(state = initState, action: any) {
    switch (action.type) {
        case CartMap.GET_CART_LIST_START: {
            return {
                ...state,
            }
        }
        case CartMap.GET_CART_LIST_SUCCESS: {
            return {
                ...state,
                cartList: action.payload
            }
        }
        case CartMap.GET_CART_LIST_ERROR: {
            return {
                ...state,
            }
        }
        case CartMap.UPDATE_PRODUCT_QUANTITY_START: {
            return {
                ...state,
            }
        }
        case CartMap.UPDATE_PRODUCT_QUANTITY_SUCCESS: {
            return {
                ...state,
            }
        }
        case CartMap.UPDATE_PRODUCT_QUANTITY_ERROR: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_PRODUCT_IN_CART_START: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_PRODUCT_IN_CART_SUCCESS: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_PRODUCT_IN_CART_ERROR: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_ALL_PRODUCT_IN_CART_START: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_ALL_PRODUCT_IN_CART_SUCCESS: {
            return {
                ...state,
            }
        }
        case CartMap.REMOVE_ALL_PRODUCT_IN_CART_ERROR: {
            return {
                ...state,
            }
        }
        case CartMap.SUBMIT_ORDER_START: {
            return {
                ...state,
            }
        }
        case CartMap.SUBMIT_ORDER_SUCCESS: {
            return {
                ...state,
            }
        }
        case CartMap.SUBMIT_ORDER_ERROR: {
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}