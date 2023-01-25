import { OrderActions } from "./orderAction";

export const getOrderListAsync = () => {
  return async (dispatch: any) => {
    try {
      dispatch(OrderActions.getOrderListStart());
      const data: any = await fetch(`${process.env.REACT_APP_API_CALL_URL}/order/getOrderList`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const response = await data.json();

      if (response.code === 200) {
        return dispatch(OrderActions.getOrderListSuccess(response.data));
      }
      return dispatch(OrderActions.getOrderListError());
    } catch (error) {
      return dispatch(OrderActions.getOrderListError());
    }
  };
};
