import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.scss';

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
                    Product
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Description
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Quantity
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Price
                </span>
            </div>
            <div className='header-block'>
                <span>
                    Remove
                </span>
            </div>
        </div>
        <div>
            {cartItems.map((item) => {
                return <CheckoutItem 
                        key={item.id} 
                        item={item} 
                        />
            })}    
        </div>
        <span className='Total'>
            Total: 
            ${cartTotal}
        </span>
    </div>
  )
}
