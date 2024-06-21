import prisma from "../prisma/prisma.js"
import { getCart } from "./getCart.js"
export const removeCartItem = async (userId, cartItemId) => {
    const cartItem = await prisma.cartItem.findUnique({
        where: {
            id: cartItemId
        }
    })

    if (!cartItem) {
        return null
    }

    const reducedPrice = await parseFloat(cartItem.price * cartItem.quantity);

    const removedCartItem = await prisma.cartItem.delete({
        where: {
            id: cartItemId
        }
    })
    console.log(removedCartItem)

    const foundCart = await getCart(userId);

    console.log(parseFloat(await foundCart.totalPrice) - parseFloat(reducedPrice))

    const updatedCart = await prisma.cart.update({
        where: {
            userId: userId
        },
        data: {
            totalPrice: parseFloat(await foundCart.totalPrice) - parseFloat(reducedPrice)
        }
    })

    return await updatedCart;
}