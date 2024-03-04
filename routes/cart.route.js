import express from "express";
import addToCart from "../controllers/addToCart.controller.js";

const router = express.Router();

router.route('/add')
    .post(addToCart)


export default router;