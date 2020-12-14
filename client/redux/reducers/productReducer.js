import { FETCH_ONE_PRODUCT } from "../actions";

export default (state = {}, action) => {
	if (action.type === FETCH_ONE_PRODUCT) {
		state = action.payload;
		return state;
	}
	return state;
};
