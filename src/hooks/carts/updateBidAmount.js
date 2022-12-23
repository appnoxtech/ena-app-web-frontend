import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";
import { useRemoveItemFromCart } from "./removeFromCart";

export const useUpdateBidAmount = () => {

    const handleBidAmountChange = (data) => {
         const cartList = JSON.parse(localStorage.getItem('cartData'));

         const {bidAmount} = data;
         if(bidAmount > 0){
            const item = cartList.find(item => item.productId === data.productId);
            const updateItem = {
                ...item,
                bidAmount,
            }
         
            const index = cartList.findIndex(item => item.productId === data.productId);
            cartList[index] = updateItem;
            localStorage.setItem('cartData', JSON.stringify(cartList));
            return cartList;
         }else if(bidAmount === 0){
            alert(`Bid Amount can't be zero`);
         } else {
            return;
         }
    }
    return handleBidAmountChange;
}