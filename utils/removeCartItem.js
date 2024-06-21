import prisma from "../prisma/prisma.js"


export const removeCartItem = async (userId, productId) => {
    const cartItem = await prisma.cartItem.findFirst({
        where: {
            userId: userId,
            productId: productId
        }
    })

    if (!cartItem) {
        return null
    }

    const reducedPrice = await parseFloat(cartItem.price * cartItem.quantity);

    const removedCartItem = await prisma.cartItem.delete({
        where: {
            userId: userId,
            productId: productId
        }
    })
    console.log(removedCartItem)
    
    const updatedCart = await prisma.cart.update({
        where : {
            userId : userId
        },
        data : {
            totalPrice : parseFloat(totalPrice - reducedPrice)
        }
    })

    return await updatedCart;
}