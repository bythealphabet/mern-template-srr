import { FETCH_PRODUCTS, FETCH_PARSIAL_PRODUCT_LIST } from "../actions";

export default (state = [], action) => {
	if (action.type === FETCH_PRODUCTS) {
		state = action.payload;
		return state;
	}

	if (action.type === FETCH_PARSIAL_PRODUCT_LIST) {
		state = action.payload;
		return state;
	}

	return state;
};
