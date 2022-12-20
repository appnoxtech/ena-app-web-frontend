import { UpdateCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useAddItemToCartHooks } from "./addintoCart";
import { useGetCartList } from "./getCartList";
import { useUpdateCartItem } from "./updateCartItem";

export const useRemoveItemFromCart = () => {
    const isLogin = false;
    const cartData = useGetCartList();
    //const handleUpdateCartItem = useUpdateCartItem();
    const handleAddItemToCart = useAddItemToCartHooks();

    const handleRemoveItemfromCart = async(data) => {
        const isRemove = data.removeProduct;
        console.log('isRemove', isRemove);
        if(isRemove === 1){
            const newData = cartData.filter(item => item.productId !== data.productId);
            localStorage.setItem('cartData', JSON.stringify(newData));
            return newData;
        }else if(isRemove === 0){
            const data = cartData.find(item => item.productId === data.productId);
            const newItem = {
                ...data,
                quantity: data.quantity - 1,
            }
            //await handleUpdateCartItem(newItem);
            return true;
        }else {
            console.log('this should land here');
            return;
        }
    }
    return handleRemoveItemfromCart;
}