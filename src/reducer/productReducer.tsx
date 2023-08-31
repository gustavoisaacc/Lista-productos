import { SET_PRODUCTS, SET_PRODUCTS_EXITO } from "../action/type";

const initialValue = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case SET_PRODUCTS_EXITO:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};
