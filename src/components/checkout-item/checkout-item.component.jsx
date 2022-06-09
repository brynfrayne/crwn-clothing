import { useContext } from 'react';
import './checkout-item.styles.scss';
import { CartContext } from '../../context/cart.context';

export default function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, cartItemDecrement, deleteItemFromCart } = useContext(CartContext);

  const clearItemHandler = ()=> deleteItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => cartItemDecrement(item);

    return (
    <div className='checkout-item-container'>
        <div className='image-container' >
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>
                &#10094;
            </div>
            <span className='value'>
                {quantity}
            </span>
            <div className='arrow' onClick={addItemHandler}>
                &#10095;
            </div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHandler}>
            &#10005;
        </div>
    </div>
  )
}
