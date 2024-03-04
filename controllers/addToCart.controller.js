import prisma from "../prisma/prisma.js";
import cartExists from "../utils/cartExists.js";
import createCart from "../utils/createCart.js"
const addToCart = async (req, res) => {
    const { userId, productId, price } = req.body;
    const foundCart = await cartExists(userId);

    if (await foundCart) {
        try {
            const cart = await prisma.cart.update({
                where: {
                    id: foundCart.id
                },
                data: {
                    userId: userId,
                    totalPrice: parseFloat(price)
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

        try {
            const cart = await prisma.cart.update({
                where: {
                    id: await newCart.id
                },
                data: {
                    userId: userId,
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