import axios from "axios";
import queryString from "query-string";
const development = process.env.NODE_ENV === "development";

export async function parsialList() {
	try {
		const res = await axios.get(
			`${
				development
					? "http://localhost:3001/api/parsial-products"
					: "/api/parsial-products"
			}`
		);

		return res.data;
	} catch (err) {
		console.log("api product Error:");
	}
}

export async function list() {
	try {
		const res = await axios.get(
			`${
				development
					? "http://localhost:3001/api/products"
					: "/api/products"
			}`
		);

		return res.data;
	} catch (err) {
		console.log("api product Error:", err);
	}
}

export async function read(id) {
	try {
		const res = await axios.get(
			`${
				development
					? `http://localhost:3001/api/products/${id}`
					: `/api/products/${id}`
			}`
		);

		return res.data;
	} catch (err) {
		console.log("err:", err);
	}
}
