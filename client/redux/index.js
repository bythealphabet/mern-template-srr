import { combineReducers } from "redux";
import productsReducer from "./productsSlice";
import productReducer from "./productSlice";

export default combineReducers({
	products: productsReducer,
	product: productReducer,
});
