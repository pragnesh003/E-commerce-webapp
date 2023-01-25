import { CartActions } from "./cartAction";

export const getCartListAsync = () => {
  return async (dispatch: any) => {
    try {
      dispatch(CartActions.getCartListStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/cart/getCartList`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(CartActions.getCartListSuccess(response.data));
      }
      return dispatch(CartActions.getCartListError());
    } catch (error) {
      return dispatch(CartActions.getCartListError());
    }
  };
};

export const updateProductQuantityAsync = (id: any, quantity: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(CartActions.updateProductQuantityStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/cart/updateItemQuantity/${id}?quantity=${quantity}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(CartActions.updateProductQuantitySuccess(response.data));
      }
      return dispatch(CartActions.updateProductQuantityError());
    } catch (error) {
      return dispatch(CartActions.updateProductQuantityError());
    }
  };
};

export const removeProductInCartAsync = (productId: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(CartActions.removeProductInCartStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/cart/removeItemInCart/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(CartActions.removeProductInCartSuccess(response.data));
      }
      return dispatch(CartActions.removeProductInCartError());
    } catch (error) {
      return dispatch(CartActions.removeProductInCartError());
    }
  };
};

export const removeAllProductInCartAsync = () => {
  return async (dispatch: any) => {
    try {
      dispatch(CartActions.removeAllProductInCartStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/cart/removeAllItemInCart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(CartActions.removeAllProductInCartSuccess(response.data));
      }
      return dispatch(CartActions.removeAllProductInCartError());
    } catch (error) {
      return dispatch(CartActions.removeAllProductInCartError());
    }
  };
};

export const submitOrderAsync = (orders: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(CartActions.submitOrderStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/order/submitOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orders)
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(CartActions.submitOrderSuccess(response.data));
      }
      return dispatch(CartActions.submitOrderError());
    } catch (error) {
      return dispatch(CartActions.submitOrderError());
    }
  };
};
