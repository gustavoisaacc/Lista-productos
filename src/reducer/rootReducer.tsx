import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export const rootRecucer = combineReducers({
  products: productReducer,
});
