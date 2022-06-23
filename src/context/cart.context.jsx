import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const totalCalculator = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemDecrement: () => {},
    deleteItemFromCart: () => {},
    cartTotalCalculator: () => {},
    cartCount: 0,
    cartTotal: 0
});

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state, 
                ...payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };

        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

export const CartProvider = ({ children }) => {

    const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.price*cartItem.quantity, 0);

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItems: newCartItems, 
                cartTotal: newCartTotal, 
                cartCount: newCartCount 
            })
        )
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);

    }
    const cartItemDecrement = (cartItemToRemove) => {
        const newCartItems = deleteCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);

    }
    const deleteItemFromCart = (cartItemToRemove) => {
        const newCartItems = deleteItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    }
    
    const value = { 
        isCartOpen, 
        setIsCartOpen,
        addItemToCart, 
        cartItemDecrement, 
        deleteItemFromCart, 
        // cartTotalCalculator,
        cartItems, 
        cartCount,
        cartTotal 
    };

    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
};