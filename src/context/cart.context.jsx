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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems]);
    
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.price*cartItem.quantity, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const cartItemDecrement = (cartItemToRemove) => {
        setCartItems(deleteCartItem(cartItems, cartItemToRemove))
    }
    const deleteItemFromCart = (cartItemToRemove) => {
        setCartItems(deleteItem(cartItems, cartItemToRemove))
    }
    const cartTotalCalculator = (cartItems) => {
        setCartCount(totalCalculator(cartItems))
    }
    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemToCart, 
        cartItemDecrement, 
        deleteItemFromCart, 
        cartTotalCalculator,
        cartItems, 
        cartCount,
        cartTotal 
    };

    return (
        <CartContext.Provider value={value}> {children} </CartContext.Provider>
    )
};