import { OrderMap } from './orderAction';

const initState = {
    orderList: {},
}

export function reducer(state = initState, action: any) {
    switch (action.type) {
        case OrderMap.GET_ORDER_LIST_START: {
            return {
                ...state,
            }
        }
        case OrderMap.GET_ORDER_LIST_SUCCESS: {
            return {
                ...state,
                orderList: action.payload
            }
        }
        case OrderMap.GET_ORDER_LIST_ERROR: {
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