import axios from "axios";

import {
  NEW_PRODUCT_REQUEST_BY_SELLER,
  NEW_PRODUCT_SUCCESS_BY_SELLER,
  NEW_PRODUCT_FAIL_BY_SELLER,
  UPDATE_PRODUCT_REQUEST_BY_SELLER,
  UPDATE_PRODUCT_SUCCESS_BY_SELLER,
  UPDATE_PRODUCT_FAIL_BY_SELLER,
  DELETE_PRODUCT_REQUEST_BY_SELLER,
  DELETE_PRODUCT_SUCCESS_BY_SELLER,
  DELETE_PRODUCT_FAIL_BY_SELLER,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  SELLER_PRODUCTS_REQUEST,
  SELLER_PRODUCTS_SUCCESS,
  SELLER_PRODUCTS_FAIL,
} from "../constants/productConstants";

// Get Products By Seller
export const getSellerProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/v1/seller/products/");
    dispatch({
      type: SELLER_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: SELLER_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product--Seller
export const createProductSeller = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_PRODUCT_REQUEST_BY_SELLER });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/seller/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_PRODUCT_SUCCESS_BY_SELLER,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_PRODUCT_FAIL_BY_SELLER,
      payload: error.response.data.message,
    });
  }
};

//Update Product--Seller
export const updateProductSeller = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST_BY_SELLER });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/seller/product/${id}`,
      productData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS_BY_SELLER,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL_BY_SELLER,
      payload: error.response.data.message,
    });
  }
};

// Delete Product--Seller
export const deleteProductSeller = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST_BY_SELLER });

    const { data } = await axios.delete(`/api/v1/seller/product/${id}`);

    dispatch({
      type: DELETE_PRODUCT_SUCCESS_BY_SELLER,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL_BY_SELLER,
      payload: error.response.data.message,
    });
  }
};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
