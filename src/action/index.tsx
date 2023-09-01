import { Products } from "../type";
import {
  GET_PRODUCT_EDIT,
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_EXITO,
} from "./type";

export const createNewProducts = (product: Products) => {
  return (dispatch) => {
    dispatch(guardadProducto());
    try {
      dispatch(guardadProductoExito(product));
    } catch (error) {
      dispatch(guardadProductoError(true));
    }
  };
};

const guardadProducto = () => ({
  type: SET_PRODUCTS,
});

const guardadProductoExito = (producto: Products[]) => ({
  type: SET_PRODUCTS_EXITO,
  payload: producto,
});

const guardadProductoError = (state: boolean) => ({
  type: SET_PRODUCTS_ERROR,
  payload: state,
});

const editarProducto = (id: string) => ({
  type: GET_PRODUCT_EDIT,
  payload: id,
});
