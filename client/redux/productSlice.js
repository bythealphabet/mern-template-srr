import { createSlice } from "@reduxjs/toolkit";
import { read } from "../api/api-product";

export const slice = createSlice({
	name: "product",
	initialState: {},
	reducers: {
		loadOne: (state, action) => {
			return (state = action.payload);
		},
	},
});

export const { loadOne } = slice.actions;

export const fetchProduct = (id) => async (dispatch) => {
	try {
		const data = await read(id);
		dispatch(loadOne(data));
	} catch (error) {
		console.log("error:", error);
	}
};

export default slice.reducer;
