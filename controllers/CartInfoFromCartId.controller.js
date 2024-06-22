import { getCartInfoFromCartId } from "../utils/getCartInfo.js"


export const cartInfoFromCartId = async (req, res) => {
    const { cartId } = req.params

    if (!cartId) {
        return res.status(404).json({
            "error": true,
            "message": "user id or cart id is required"
        })
    }

    try {
        const cart = await getCartInfoFromCartId(cartId);
        if (!cart) {
            return res.status(404).json({
                "error": true,
                "message": "you have not created any cart"
            })
        }
        return res.status(200).json({
            "ok": true,
            "success": true,
            "data": cart
        })
    } catch (error) {
        console.info(error)
        return res.status(500).json({
            "error": true,
            "message": "internal server error"
        })
    }
}