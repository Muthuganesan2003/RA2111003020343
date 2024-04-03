import express from "express";
import { getNumbers } from "../controllers/numbersControllers.js";

const numberRouter = express.Router();

numberRouter.get("api/numbers/:numId",getNumbers )

export default numberRouter;