import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";
import { useRemoveItemFromCart } from "./removeFromCart";

export const useUpdateCartItem = () => {
    const handleRemoveItemFromCart = useRemoveItemFromCart();
    const isLogin = useIsLoginHook();
    const cartData = useGetCartList();

    const handleUpdateCartItem = async(data) => {
         const quantity = data.quantity;
         if(quantity > 0){
            const item = cartData.find(item => item.productId === data.productId);
            const updateItem = {
                ...item,
                quantity: data.quantity
            }
            const tempList = cartData.filter(item => item.productId !== data.productId);
            const updateCartData = [...tempList, updateItem];
            localStorage.setItem('cartData', JSON.stringify(updateCartData));
            return updateCartData;
         }else if(quantity === 0){
            const cartData = {
                productId: data.productId,
                removeProduct: 1
            }
            handleRemoveItemFromCart(cartData);
         } else {
            return;
         }
    }
    return handleUpdateCartItem;
}