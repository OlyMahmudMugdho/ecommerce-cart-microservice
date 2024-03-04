import prisma from "../prisma/prisma.js"

const addDemoCart = async (req, res) => {
    await prisma.cart.create({
        data: {
            userId: "gregg",
            totalPrice: 0
        }
    })

    console.log("cart created")
    return res.json({
        ok: true,
        message: "added successfully"
    })
}

export default addDemoCart;