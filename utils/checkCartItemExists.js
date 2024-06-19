import prisma from "../prisma/prisma"

export const checkCartItemExists = async (id) => {
    const product = await prisma.cartItem.findUnique({
        where: {
            productId: id
        },
    })
    return await product;
}