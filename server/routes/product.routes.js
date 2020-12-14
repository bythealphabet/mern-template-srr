import express from "express";
import prodCtrl from "../controllers/product.controller.js";

const router = express.Router();

router.route("/api/parsial-products").get(prodCtrl.parsialList);
router.route("/api/products").get(prodCtrl.listAll);

router.route("/api/products/:prodId").get(prodCtrl.read);

router.param("prodId", prodCtrl.prodByID);

export default router;
