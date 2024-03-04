import prisma from "../prisma/prisma.js";

const cartExists = async (userId) => {
    try {
        const cart = await prisma.cart.findFirst({
            where: {
                userId: userId
            }
        });
        cart ? cart : false;
    }
    catch (error) {
        console.error(error);
        return false;
    }
    return true;
}
export default cartExists;