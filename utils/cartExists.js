import prisma from "../prisma/prisma.js";

const cartExists = async (userId) => {
    try {
        const cart = await prisma.cart.findUnique({
            where: {
                userId: `${userId}`
            }
        });
        return cart != null
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export default cartExists;