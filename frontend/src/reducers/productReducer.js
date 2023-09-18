import {
  SELLER_PRODUCTS_REQUEST,
  SELLER_PRODUCTS_SUCCESS,
  SELLER_PRODUCTS_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_REQUEST_BY_SELLER,
  NEW_PRODUCT_SUCCESS_BY_SELLER,
  NEW_PRODUCT_FAIL_BY_SELLER,
  NEW_PRODUCT_RESET_BY_SELLER,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_REQUEST_BY_SELLER,
  UPDATE_PRODUCT_SUCCESS_BY_SELLER,
  UPDATE_PRODUCT_FAIL_BY_SELLER,
  UPDATE_PRODUCT_RESET_BY_SELLER,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_REQUEST_BY_SELLER,
  DELETE_PRODUCT_SUCCESS_BY_SELLER,
  DELETE_PRODUCT_FAIL_BY_SELLER,
  DELETE_PRODUCT_RESET_BY_SELLER,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST_BY_SELLER,
  PRODUCT_DETAILS_FAIL_BY_SELLER,
  PRODUCT_DETAILS_SUCCESS_BY_SELLER,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
    case NEW_PRODUCT_REQUEST_BY_SELLER:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT_SUCCESS:
    case NEW_PRODUCT_SUCCESS_BY_SELLER:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      };
    case NEW_PRODUCT_FAIL:
    case NEW_PRODUCT_FAIL_BY_SELLER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_PRODUCT_RESET:
    case NEW_PRODUCT_RESET_BY_SELLER:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case DELETE_PRODUCT_REQUEST_BY_SELLER:
    case UPDATE_PRODUCT_REQUEST:
    case UPDATE_PRODUCT_REQUEST_BY_SELLER:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
    case DELETE_PRODUCT_SUCCESS_BY_SELLER:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_PRODUCT_SUCCESS:
    case UPDATE_PRODUCT_SUCCESS_BY_SELLER:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_PRODUCT_FAIL:
    case UPDATE_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL_BY_SELLER:
    case UPDATE_PRODUCT_FAIL_BY_SELLER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_RESET:
    case DELETE_PRODUCT_RESET_BY_SELLER:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_PRODUCT_RESET:
    case UPDATE_PRODUCT_RESET_BY_SELLER:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
    case PRODUCT_DETAILS_REQUEST_BY_SELLER:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
    case PRODUCT_DETAILS_SUCCESS_BY_SELLER:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
    case PRODUCT_DETAILS_FAIL_BY_SELLER:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const sellerProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case SELLER_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELLER_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case SELLER_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
