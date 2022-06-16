import './cart-item.styles.jsx';
import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

export default function CartItem({cartItem}) {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x $ {price}
            </span>
        </ItemDetails>
    </CartItemContainer>
  )
}
