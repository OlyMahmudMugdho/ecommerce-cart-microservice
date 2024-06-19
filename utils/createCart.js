import prisma from "../prisma/prisma.js";


const createCart = async (userId) => {
    try {
        const cart = await prisma.cart.create({
            data: {
                userId
            }
        })
        return cart;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}

export default createCart;