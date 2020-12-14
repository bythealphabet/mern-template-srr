import { list, read, parsialList } from "../../api/api-product";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PARSIAL_PRODUCT_LIST = "FETCH_PARSIAL_PRODUCT_LIST";
export const FETCH_ONE_PRODUCT = "FETCH_ONE_PRODUCT";

export const fetchParsialProductsList = () => async (dispatch) => {
	try {
		const data = await parsialList();

		dispatch({
			type: FETCH_PARSIAL_PRODUCT_LIST,
			payload: data,
		});
	} catch (error) {
		console.log("error:", error);
	}
};

export const fetchProducts = () => async (dispatch) => {
	try {
		const data = await list();

		dispatch({
			type: FETCH_PRODUCTS,
			payload: data,
		});
	} catch (error) {
		console.log("error:", error);
	}
};

export const fetchOneProduct = (id) => async (dispatch) => {
	try {
		const data = await read(id);

		dispatch({
			type: FETCH_ONE_PRODUCT,
			payload: data,
		});
	} catch (error) {
		console.error("error:", error);
	}
};
