import prisma from "../prisma/prisma.js";


const createCart = async () => {
    try {
        const cart = await prisma.cart.create({
            data: {

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