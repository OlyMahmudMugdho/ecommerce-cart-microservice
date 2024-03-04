import prisma from "../prisma/prisma"

const createCart = async () => {
    try {
        await prisma.cart.create({
            data : {
    
            }
        })
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}