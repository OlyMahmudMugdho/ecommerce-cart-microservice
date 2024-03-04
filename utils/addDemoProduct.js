import prisma from "../prisma/prisma.js";
import addDemoCart from "./addDemoCart.js";


const addProduct = async () => {
    await addDemoCart()
    await prisma.product.create({
        data : {
            name: "Product 1",
            price: 1000,
            description: "This is a book",
            category: "books"
        }
    })
    console.log("Product added");
    return res.json({
        ok: true,
        message: "product added successfully"
    })
}

export default addProduct;