import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/api/subcribe").post(userCtrl.subscribe);

export default router;
