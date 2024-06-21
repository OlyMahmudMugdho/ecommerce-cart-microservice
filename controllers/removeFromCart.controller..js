import prisma from "../prisma/prisma.js";

export const removeItem = async (req, res) => {
    const {userId} = req.params;
    return res.status(200).json(userId)
}