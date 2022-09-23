import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    // find if cart items contains product to add
    if (cartItems.find(item => item.id === productToAdd.id)) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
   // return new array with modified cartitems/ new cart item
   return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteCartItem = (cartItems, cartItemToRemove) => {
    
    if (cartItemToRemove.quantity > 1) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    );
    } 
    return deleteItem(cartItems, cartItemToRemove);
    
};

const deleteItem = (cartItems, cartItemToRemove) => {
    cartItems = cartItems.filter(item => item.id !== cartItemToRemove.id)
    return cartItems;
}

export const setIsCartOpen = (boolean) => 
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);



export const addItemToCart = (cartItems ,productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}
export const cartItemDecrement = (cartItems ,cartItemToRemove) => {
    const newCartItems = deleteCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)

}
export const deleteItemFromCart = (cartItems ,cartItemToRemove) => {
    const newCartItems = deleteItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}