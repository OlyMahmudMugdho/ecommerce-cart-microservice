import { getCartInfoFromUserId } from "../utils/getCartInfo.js"


export const cartInfoFromUserId = async (req, res) => {
    const { userId } = req.params

    if (!userId) {
        return res.status(404).json({
            "error": true,
            "message": "user id or cart id is required"
        })
    }

    try {
        const cart = await getCartInfoFromUserId(userId);
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
        return res.status(500).json({
            "error": true,
            "message": "internal server error"
        })
    }
}