import prisma from "../prisma/prisma.js";

export const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await prisma.cart.delete({
            where: {
                id: cartId
            }
        })
        return res.status(200).json({
            "success": true,
            "ok": true,
            "deleted": true,
            "message": "deleted",
            "data": cart
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            "ok": false,
            "success": false,
            "message": "internal server error"
        })
    }
}