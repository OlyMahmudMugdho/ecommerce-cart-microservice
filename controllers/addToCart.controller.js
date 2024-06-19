import prisma from "../prisma/prisma.js";
import cartExists from "../utils/cartExists.js";
import checkCartItemExists from "../utils/checkCartItemExists.js";
import createCart from "../utils/createCart.js";
import { fetchProduct } from "../utils/fetchProduct.js";
import { createCartItem } from "../utils/createCartItem.js";
const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    const product = await fetchProduct(productId);


    const foundCart = await cartExists(userId);

    //console.log(foundCart.totalPrice)




    if (await foundCart) {
        try {
            const newPrice = parseFloat(price) + foundCart.totalPrice;

            const cart = await prisma.cart.update({
                where: {
                    id: foundCart.id
                },
                data: {
                    userId: userId,
                    totalPrice: parseFloat(newPrice)
                }
            })

            return res.json({
                ok: true,
                success: true,
                message: "Product added to cart"
            })
        }
        catch (error) {
            console.error(error.message);
            return res.json({
                ok: false,
                success: false,
                message: error.message
            })
        }
    }

    else {
        const newCart = await createCart();



        const cartId = await newCart.id;

        let cartItem = await checkCartItemExists(productId, cartId);

        if (await cartItem == null) {
            cartItem = await createCartItem(
                productId,
                cartId,
                await product.name,
                await parseFloat(product.price),
                parseFloat(quantity),
                
            )
        }
        else {
            cartItem = await prisma.cartItem.update({
                where: {
                    id: await cartItem.id,
                },
                data: {
                    quantity: await cartItem.quantity + quantity
                }
            })
        }

        try {
            let price = parseFloat(await cartItem.quantity) * parseFloat(await cartItem.price)
            const cart = await prisma.cart.update({
                where: {
                    id: await newCart.id
                },
                data: {
                    totalPrice: parseFloat(price)
                }
            })

            return res.json({
                ok: true,
                success: true,
                message: "Product added to cart"
            })

        } catch (error) {
            console.error(error.message);
            return res.json({
                ok: false,
                success: false,
                message: error.message
            })
        }
    }

}

export default addToCart;