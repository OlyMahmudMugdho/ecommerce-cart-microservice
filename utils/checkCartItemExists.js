import prisma from "../prisma/prisma"

export const checkCartItemExists = async (productId, cartId) => {
    const product = await prisma.cartItem.findUnique({
        where: {
            productId,
            cartId
        },
    })
    return await product;
}