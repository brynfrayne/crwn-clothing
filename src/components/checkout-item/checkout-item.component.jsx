import { useContext } from 'react';
import './checkout-item.styles.jsx';
import { CartContext } from '../../context/cart.context';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value } from './checkout-item.styles.jsx';

export default function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, cartItemDecrement, deleteItemFromCart } = useContext(CartContext);

  const clearItemHandler = ()=> deleteItemFromCart(item);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => cartItemDecrement(item);

    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name} />
        </ImageContainer>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
            <Arrow onClick={removeItemHandler}>
                &#10094;
            </Arrow>
            <Value>
                {quantity}
            </Value>
            <Arrow onClick={addItemHandler}>
                &#10095;
            </Arrow>
        </Quantity>
        <BaseSpan>{price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>
            &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
  )
}
