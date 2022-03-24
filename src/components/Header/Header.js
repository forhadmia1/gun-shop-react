import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Header.css'

const Header = ({savePd,openModal}) => {
    return (
        <nav className='navbar'>
            <h1>Gun Shop</h1>
            <div className='cart-counter'>
                <span>{savePd.length}</span>
                <AiOutlineShoppingCart onClick={openModal} className='icon' color='#fff'/>
            </div>
        </nav>
    );
};

export default Header;