import { HomeMap } from './homeAction';

const initState = {
    productList: {},
}

export function reducer(state = initState, action: any) {
    switch (action.type) {
        case HomeMap.GET_PRODUCT_LIST_START: {
            return {
                ...state,
            }
        }
        case HomeMap.GET_PRODUCT_LIST_SUCCESS: {
            return {
                ...state,
                productList: action.payload
            }
        }
        case HomeMap.GET_PRODUCT_LIST_ERROR: {
            return {
                ...state,
            }
        }
        case HomeMap.ADD_PRODUCT_IN_CART_START: {
            return {
                ...state,
            }
        }
        case HomeMap.ADD_PRODUCT_IN_CART_SUCCESS: {
            return {
                ...state,
            }
        }
        case HomeMap.ADD_PRODUCT_IN_CART_ERROR: {
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