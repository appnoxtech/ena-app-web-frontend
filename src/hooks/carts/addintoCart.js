import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";

export const useAddItemToCartHooks = () => {
    const handleAddItemToCart = (data) => {
        const list = localStorage.getItem('cartData');
        let cartList = [];
        if(list){
           cartList = JSON.parse(list);
        }
        console.log('cartList ******', cartList);
        if(cartList.length === 0){
            localStorage.setItem('cartData', JSON.stringify([data]));
            return true;
         }else{
             cartList.push(data)
             console.log('new data list', cartList);
             localStorage.setItem('cartData', JSON.stringify(cartList));
             return true;
         }
    }

    return handleAddItemToCart;
    
}