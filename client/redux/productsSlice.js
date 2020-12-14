import { createSlice } from "@reduxjs/toolkit";
import { list, parsialList } from "../api/api-product";

export const slice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		full: (state = [], action) => {
			return (state = action.payload);
		},
		parsial: (state = [], action) => {
			return (state = action.payload);
		},
	},
});

export const { full, parsial } = slice.actions;

export const fetchfull = () => async (dispatch) => {
	try {
		const data = await list();

		dispatch(full(data));
	} catch (error) {
		console.log("error:", error);
	}
};

export const fetchParsial = () => async (dispatch) => {
	try {
		const data = await parsialList();
		dispatch(full(data));
	} catch (error) {
		console.log("error:", error);
	}
};

export const showProducts = (state) => state.products;

export default slice.reducer;
