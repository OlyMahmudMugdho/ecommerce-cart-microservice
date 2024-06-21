import express from "express";
import addToCart from "../controllers/addToCart.controller.js";
import removeFromCart from "../controllers/removeFromCart.controller..js";
import { deleteCart } from "../controllers/deleteCart.controller.js";
const router = express.Router();

router.route('/add')
    .post(addToCart)

router.route('/delete/:cartId')
    .delete(deleteCart)

router.route('/remove/:userId/:cartItemId')
    .delete(removeFromCart)


export default router;