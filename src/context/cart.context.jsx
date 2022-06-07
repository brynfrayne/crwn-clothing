import { createContext, useState, useEffect } from "react";

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

// !! going to try and create a decerement counter as the inverse of the addCartItem function above!!!
const deleteCartItem = (cartItems, productToDelete) => {
    return cartItems.map((cartItem) => cartItem.id === productToDelete.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
    );
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    deleteItemFromCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems, productToDelete))
    }
    const value = { isCartOpen, setIsCartOpen, addItemToCart, deleteItemFromCart, cartItems, cartCount };

    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
};