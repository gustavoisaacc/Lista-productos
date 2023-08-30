import { Products } from "../type";
import { SET_PRODUCTS } from "./type";

export const createNewProducts = (product: Products) => {
  return () => {
    console.log(product);
  };
};
