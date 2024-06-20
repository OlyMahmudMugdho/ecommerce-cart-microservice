import prisma from "../prisma/prisma.js";

export const getCart = async (userId) => {
    const foundCart = await prisma.cart.findUnique({
        where : {
            userId
        }
    });
    return await foundCart;
} 