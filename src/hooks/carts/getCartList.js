import { GetCartDetailsService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";

export const useGetCartList = () => {
    const list = localStorage.getItem('cartData')
    if(list){
        const data = JSON.parse(list);
        return data;
    }else{
        return [];
    }
}