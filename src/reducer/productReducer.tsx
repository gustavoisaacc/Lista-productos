import { SET_PRODUCTS } from "../action/type";

const initialValue = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state };

    default:
      return state;
  }
};
