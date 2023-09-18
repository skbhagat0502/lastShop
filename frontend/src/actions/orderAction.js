import {
  SELLER_ORDERS_REQUEST,
  SELLER_ORDERS_SUCCESS,
  SELLER_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST_BY_SELLER,
  UPDATE_ORDER_SUCCESS_BY_SELLER,
  UPDATE_ORDER_FAIL_BY_SELLER,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST_BY_SELLER,
  ORDER_DETAILS_SUCCESS_BY_SELLER,
  ORDER_DETAILS_FAIL_BY_SELLER,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

import axios from "axios";

export const getSellerOrders = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_ORDERS_REQUEST });

    const { data } = await axios.get("/api/v1/seller/orders/");

    dispatch({ type: SELLER_ORDERS_SUCCESS, payload: data.orders });
  } catch (error) {
    dispatch({
      type: SELLER_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Order--Seller
export const updateOrderSeller = (id, order) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST_BY_SELLER });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `/api/v1/seller/order/${id}`,
      order,
      config
    );

    dispatch({ type: UPDATE_ORDER_SUCCESS_BY_SELLER, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL_BY_SELLER,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/order/${id}`);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getOrderDetailsForSeller = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST_BY_SELLER });

    const { data } = await axios.get(`/api/v1/seller/order/${id}`);

    dispatch({ type: ORDER_DETAILS_SUCCESS_BY_SELLER, payload: data.order });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL_BY_SELLER,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
