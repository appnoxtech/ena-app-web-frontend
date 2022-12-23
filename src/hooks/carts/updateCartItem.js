import { AddToCartService } from "../../services/cart/cartService";
import { useIsLoginHook } from "../user/IsLoginHooks";
import { useGetCartList } from "./getCartList";
import { useRemoveItemFromCart } from "./removeFromCart";

export const useUpdateCartItem = () => {
    const handleRemoveItemFromCart = useRemoveItemFromCart();
    const isLogin = useIsLoginHook();
    const cartData = useGetCartList();

    const handleUpdateCartItem = (data) => {
         const quantity = data.quantity;
         console.log('quantity', quantity);

         if(quantity > 0){
            const item = cartData.find(item => item.productId === data.productId);
            const updateItem = {
                ...item,
                quantity: data.quantity
            }
            const index = cartData.findIndex(item => item.productId === data.productId);
            console.log('index', index);
            //const updateCartData = [...tempList, updateItem];
            cartData[index] = updateItem
            console.log('after putting item at index', cartData);
            localStorage.setItem('cartData', JSON.stringify(cartData));
            return cartData;
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