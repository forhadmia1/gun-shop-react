import React from 'react';
import './ModalItem.css'

const ModalItem = ({product}) => {
    const {name,price,img}=product;

    return (
        <div className='modal-card'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default ModalItem;