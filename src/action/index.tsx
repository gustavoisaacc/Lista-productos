/* eslint-disable react-hooks/rules-of-hooks */
import { Products } from "../type";
import {
  GET_PRODUCT_EDIT,
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_EXITO,
} from "./type";

import Swal from "sweetalert2";

import Swal from "sweetalert2";

export const createNewProducts = (product: Products) => {
  return (
    dispatch: (arg0: { type: string; payload?: boolean | Products }) => void
  ) => {
    dispatch(guardadProducto());
    try {
      dispatch(guardadProductoExito(product));
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      dispatch(guardadProductoError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, inteta de nuevo",
      });
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
