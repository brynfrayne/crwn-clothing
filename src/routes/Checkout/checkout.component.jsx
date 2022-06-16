import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../context/cart.context';
import './checkout.styles.jsx';
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles.jsx';

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>
                    Product
                </span>
            </HeaderBlock>
            <HeaderBlock>
                <span>
                    Description
                </span>
            </HeaderBlock>
            <HeaderBlock>
                <span>
                    Quantity
                </span>
            </HeaderBlock>
            <HeaderBlock>
                <span>
                    Price
                </span>
            </HeaderBlock>
            <HeaderBlock>
                <span>
                    Remove
                </span>
            </HeaderBlock>
        </CheckoutHeader>
        <div>
            {cartItems.map((item) => {
                return <CheckoutItem 
                        key={item.id} 
                        item={item} 
                        />
            })}    
        </div>
        <Total>
            Total: 
            ${cartTotal}
        </Total>
    </CheckoutContainer>
  )
}
