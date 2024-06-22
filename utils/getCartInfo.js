import prisma from "../prisma/prisma.js";

export const getCartInfoFromUserId = async (userId) => {
    const cart = await prisma.cart.findUnique({
        where : {
            userId : userId
        }
    })
    return await cart
}


export const getCartInfoFromCartId = async (cartId) => {
    const cart = await prisma.cart.findUnique({
        where : {
            id : cartId
        }
    })
    return await cart
}