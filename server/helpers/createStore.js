import { configureStore } from "@reduxjs/toolkit";
import reducer from "../../client/redux";

export default () => configureStore({ reducer });
