import prisma from "../prisma/prisma.js";

const cartExists = async (userId) => {
    try {
        const cart = await prisma.cart.findFirst({
            where: {
                userId: `${userId}`
            }
        });

        if (!cart?.id) {
            return false;
        }
        else {
            return cart;
        }
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export default cartExists;