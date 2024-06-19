import prisma from "../prisma/prisma.js";

export const createCartItem = async (productId,cartId, name, price, quantity) => {
    try {
        const item = await prisma.cartItem.create({
            data : {
                productId : productId,
                name : name,
                price : price,
                quantity : quantity,
                cartId : cartId,
            }
        })
        return item;
    } catch (error) {
        console.log(error)
        return null;
    } 
}