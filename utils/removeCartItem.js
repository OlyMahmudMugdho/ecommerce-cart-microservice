import prisma from "../prisma/prisma.js"


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

    const updatedCart = await prisma.cart.update({
        where: {
            userId: userId
        },
        data: {
            totalPrice: parseFloat(totalPrice - reducedPrice)
        }
    })

    return await updatedCart;
}