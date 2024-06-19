import prisma from "../prisma/prisma.js"

const checkCartItemExists = async (productId, cartId) => {
    const product = await prisma.cartItem.findFirst({
        where: {
            productId,
            cartId
        },
    })
    return await product;
}

export default checkCartItemExists