import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";

export const useAddItemToCartHooks = () => {
    const cartList = useGetCartList();
    const handleAddItemToCart = async(data) => {
        if(cartList.length === 0){
            localStorage.setItem('cartData', JSON.stringify([data]));
            return true;
         }else{
             localStorage.setItem('cartData', JSON.stringify([...cartList, data]));
             return true;
         }
    }

    return handleAddItemToCart;
    
}