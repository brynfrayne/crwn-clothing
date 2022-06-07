import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';

export default function Checkout() {
  const { cartItems, addItemToCart, cartItemDecrement, deleteItemFromCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div>
        <div className='checkout-column-title'>
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
        </div>
        <div>
            {cartItems.map((item) => {
                return <CheckoutItem 
                        key={item.id} 
                        item={item} 
                        addItem={addItemToCart} 
                        decrementItem={cartItemDecrement} 
                        deleteItemFromCart={deleteItemFromCart}
                        />
            })}    
        </div>
    </div>
  )
}
