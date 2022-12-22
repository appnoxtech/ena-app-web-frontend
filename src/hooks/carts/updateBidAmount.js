import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";
import { useRemoveItemFromCart } from "./removeFromCart";

export const useUpdateBidAmount = () => {
    const handleRemoveItemFromCart = useRemoveItemFromCart();
    const isLogin = useIsLoginHook();
    const cartData = useGetCartList();

    const handleBidAmountChange = async(data) => {
         const {bidAmount} = data;
         if(bidAmount > 0){
            const item = cartData.find(item => item.productId === data.productId);
            const updateItem = {
                ...item,
                bidAmount,
            }
            const tempList = cartData.filter(item => item.productId !== data.productId);
            const updateCartData = [...tempList, updateItem];
            localStorage.setItem('cartData', JSON.stringify(updateCartData));
            return updateCartData;
         }else if(bidAmount === 0){
            alert(`Bid Amount can't be zero`);
         } else {
            return;
         }
    }
    return handleBidAmountChange;
}