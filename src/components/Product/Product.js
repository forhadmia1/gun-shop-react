import React from 'react';
import './Product.css'
import { BsFillCartFill } from 'react-icons/bs';

const Product = ({product,addToCart}) => {
    const {name,price,img,capacity,bullet,action}=product;
    return (
        <div className='card'>
      <div className='image-container'>
        <img src={img} alt='' />
      </div>
      <div className='gun-info'>
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {capacity}</p>
        <p>Action : {action}</p>
      </div>
      <div className='add-to-cart'>
        <button onClick={()=>addToCart(product)}>
          <BsFillCartFill className='icon' />
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
    );
};

export default Product;