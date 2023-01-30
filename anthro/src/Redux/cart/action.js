import * as types from "./actionTypes";
import axios from "axios";

export const getCartItem = () => (dispatch) => {
  dispatch({
    type: types.GET_CART_ITEM_REQUEST,
  });

  axios
    .get("https://anthropologyapi-2nd.onrender.com/cart")
    .then((res) => {
        console.log(res.data)
      dispatch({
        type: types.GET_CART_ITEM_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: types.GET_CART_ITEM_FAILURE,
      });
    });
};

export const addCartItem = (payload) => (dispatch) => {
  console.log("cartpayload", payload);
  dispatch({
    type: types.ADD_TO_CART_REQUEST,
  });

  axios
    .post("https://anthropologyapi-2nd.onrender.com/cart", payload)
    .then((res) => {
      dispatch({
        type: types.ADD_TO_CART_SUCCESS,
        payload: res.data,
        
      });
    })
    .catch(() => {
      dispatch({
        type: types.ADD_TO_CART_FAILURE,
      });
    });
};

export const updateCartItem = (payload) => (dispatch) => {
  dispatch({
    type: types.QUANTITY_UPDATE_REQUEST,
  });

  axios
    .get("https://anthropologyapi-2nd.onrender.com/cart")
    .then((res) => {
      dispatch({
        type: types.QUANTITY_UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({
        type: types.QUANTITY_UPDATE_FAILURE,
      });
    });
};

export const deleteCartItem = (payload) => (dispatch) => {
  // console.log("pay",payload)
  dispatch({
    type: types.DELETE_ITEM_REQUEST,
  });

  return axios
    .delete(`https://anthropologyapi-2nd.onrender.com/cart/${payload}`)
    .then((res) => {
     return dispatch({
        type: types.DELETE_ITEM_SUCCESS,
        // payload: res.data,
      });
      // getCartItem();
    })
    .catch(() => {
      dispatch({
        type: types.DELETE_ITEM_FAILURE,
      });
    });
};
