import prisma from "../prisma/prisma";

const createCartItem = async (productId,cartId, name, price, quantity) => {
    try {
        const item = await prisma.cartItem.create({
            data : {
                productId,
                name,
                price,
                quantity,
                cartId,
            }
        })
        return item;
    } catch (error) {
        console.log(error)
        return null;
    } 
}