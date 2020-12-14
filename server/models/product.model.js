import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: "Name is required",
		},
		description: {
			type: String,
			trim: true,
		},
		photos: [{ type: String, trim: true }],
	},
	{ timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
