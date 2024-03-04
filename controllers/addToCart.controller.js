import prisma from "../prisma/prisma.js";
import cartExists from "../utils/cartExists.js";

const addToCart = async (req, res) => {
    const { userId, productId, price } = req.body.userId;
    const foundCart = await cartExists(userId);

    if (foundCart) {
        const cart = await prisma.cart.update({
            where: {
                cartId: foundCart.id
            },
            data: {
                userId: userId
            }
        })
    }

}

export default addToCart;