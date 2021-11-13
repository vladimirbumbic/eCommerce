import React from 'react';
import { useGlobalContext } from '../context/Context';
import Logo from '../img/logo.svg';
import Bag from '../img/bag.svg';

function Navbar() {

    const {toggleOpenCloseCart, amount} = useGlobalContext();

    return (
        <nav>
            <div className='navbar-center'>
                <img className='logo' src={Logo} alt='logo' />
                <div className='cart-bag' 
                    onClick={_ => toggleOpenCloseCart('OPEN_CART')}>
                    <img src={Bag} alt='cart bag' />
                    <h4 className='amount'>Cart({amount})</h4>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
