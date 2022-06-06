import React from 'react';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { ReactComponent as Minus } from '../../assets/arrow_back.svg';
import { ReactComponent as Add } from '../../assets/arrow_forward.svg';

export default function CheckoutItem({ item, addItem }) {
  const { imageUrl, name, quantity, price } = item;
  console.log(item);
    return (
    <div>
        <img src={imageUrl} alt={name} />
        <span>{name}</span>
        <span>
            <Minus/>
            {quantity}
            <Add onClick={() => addItem(item)}/>
        </span>
        <span>{price}</span>
        <Delete/>
    </div>
  )
}
