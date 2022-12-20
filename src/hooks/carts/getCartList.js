import { GetCartDetailsService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";

export const useGetCartList = () => {
    // const getCartList = async() => {
    //     const res = await GetCartDetailsService();
    //     const data = res.data[0].productList;
    //     localStorage.setItem('cartData', JSON.stringify(data));
    //     return data;
    // }
    // if(isLogin){
    //     getCartList();
    // }else{

    // }
    const list = localStorage.getItem('cartData')
    if(list){
        const data = JSON.parse(list);
        return data;
    }else{
        return [];
    }
}