import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import template from "./../template";

import morgan from "morgan";

import devBundle from "../build-utils/devBundle";

const app = express();

const development = process.env.NODE_ENV === "development";

console.log("DEVELOPMENT: ", process.env.NODE_ENV);

if (development) {
  devBundle.compile(app);
}

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("*", (req, res, next) => {
  res.status(200).send(template());
});

export default app;
