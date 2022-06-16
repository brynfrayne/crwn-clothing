import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.jsx';
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles.jsx';

export default function CartDropDown() {
  const navigate = useNavigate();
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const handleClick = () => {
      navigate('/checkout');
      toggleIsCartOpen();
  }
  return (
    <CartDropdownContainer>
        <CartItems>
            {cartItems.map(item => 
                <CartItem key={item.id} cartItem={item}/>
            )}
        </CartItems>
        <Button onClick={handleClick}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}
