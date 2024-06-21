
import { removeCartItem } from "../utils/removeCartItem.js";

const removeFromCart = async (req, res) => {
    const { userId, cartItemId } = req.params;
    const updatedCart = await removeCartItem(userId, cartItemId)
    return res.status(200).json(await updatedCart)
}
export default removeFromCart