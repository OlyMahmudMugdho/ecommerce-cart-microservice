import prisma from "../prisma/prisma.js";

const removeFromCart = async (req, res) => {
    const {userId} = req.params;
    const {productId} = req.params;
    console.log(productId)
    return res.status(200).json(userId)
}
export default removeFromCart