import prisma from "../prisma/prisma.js";

export const getCartInfoFromUserId = async (userId) => {
    const cart = await prisma.cart.findUnique({
        where : {
            userId : userId
        }
    })
    return await cart
}