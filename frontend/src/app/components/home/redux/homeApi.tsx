import { HomeActions } from "./homeAction";

export const getProductListAsync = (categoryFilterData: any, priceFilterData: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(HomeActions.getProductListStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/product/getProductList?category=${categoryFilterData}&startPrice=${priceFilterData.startPrice}&endPrice=${priceFilterData.endPrice}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(HomeActions.getProductListSuccess(response.data));
      }
      return dispatch(HomeActions.getProductListError());
    } catch (error) {
      return dispatch(HomeActions.getProductListError());
    }
  };
};

export const addProductInCartAsync = (productId: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(HomeActions.addProductInCartStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/cart/addItemInCart/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(HomeActions.addProductInCartSuccess(response.data));
      }
      return dispatch(HomeActions.addProductInCartError());
    } catch (error) {
      return dispatch(HomeActions.addProductInCartError());
    }
  };
};
