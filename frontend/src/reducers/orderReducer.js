import {
  SELLER_ORDERS_REQUEST,
  SELLER_ORDERS_SUCCESS,
  SELLER_ORDERS_FAIL,
  UPDATE_ORDER_REQUEST_BY_SELLER,
  UPDATE_ORDER_SUCCESS_BY_SELLER,
  UPDATE_ORDER_FAIL_BY_SELLER,
  UPDATE_ORDER_RESET_BY_SELLER,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST_BY_SELLER,
  ORDER_DETAILS_SUCCESS_BY_SELLER,
  ORDER_DETAILS_FAIL_BY_SELLER,
  CLEAR_ERRORS,
} from "../constants/orderConstants";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_REQUEST_BY_SELLER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_ORDER_SUCCESS_BY_SELLER:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_ORDER_FAIL_BY_SELLER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ORDER_RESET_BY_SELLER:
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

export const orderDetailsReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
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
export const orderDetailsReducerForSeller = (state = { order: {} }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST_BY_SELLER:
      return {
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS_BY_SELLER:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL_BY_SELLER:
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

export const sellerOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case SELLER_ORDERS_REQUEST:
      return {
        loading: true,
      };
    case SELLER_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case SELLER_ORDERS_FAIL:
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
