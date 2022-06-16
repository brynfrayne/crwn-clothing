import './product-card.styles.jsx';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import Button from '../button/button.component';
import { Footer, ProductCartContainer, Name, Price } from './product-card.styles.jsx';

export default function ProductCard( { product }) {
    const { addItemToCart } = useContext(CartContext);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemToCart(product)

  return (
    <ProductCartContainer>
        <img src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </Footer>
        <Button buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
    </ProductCartContainer>
  )
}