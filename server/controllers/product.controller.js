import Product from "../models/product.model";
import errorHandler from "../helpers/dbErrorHandler";

function parsialList(req, res) {
	Product.find({}, "name description photos")
		.slice("photos", 3)
		.exec()
		.then((products) => {
			res.json(products);
		})
		.catch((err) =>
			res.status(400).json({ error: errorHandler.getErrorMessage(err) })
		);
}

function listAll(req, res) {
	Product.find()
		.then((products) => res.json(products))
		.catch((err) =>
			res.status(400).json({
				error: errorHandler.getErrorMessage(err),
			})
		);
}

function prodByID(req, res, next, id) {
	Product.findById(id).exec((err, product) => {
		if (err || !product) {
			return res.status(400).json({ error: "Product Not Found" });
		}

		req.profile = product;
		next();
	});
}

function read(req, res, next) {
	res.json(req.profile);
}

export default { parsialList, listAll, prodByID, read };
