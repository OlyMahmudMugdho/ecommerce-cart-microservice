
import { removeCartItem } from "../utils/removeCartItem.js";

const removeFromCart = async (req, res) => {
    const { userId, productId } = req.params;
    const updatedCart = await removeCartItem(userId, productId)
    return res.status(200).json(await updatedCart)
}
export default removeFromCart