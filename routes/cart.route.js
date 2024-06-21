import express from "express";
import addToCart from "../controllers/addToCart.controller.js";
import removeFromCart from "../controllers/removeFromCart.controller..js";
const router = express.Router();

router.route('/add')
    .post(addToCart)

router.route('/remove/:userId/:productId')
    .delete(removeFromCart)


export default router;