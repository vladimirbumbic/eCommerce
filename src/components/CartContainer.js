import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from '../context/Context';
import Logo from '../img/logo.svg';
import CloseIcon from '../img/close-icon.svg';

function CartContainer() {

    const {isOpen, cart, toggleOpenCloseCart,
        clearCart, total} = useGlobalContext();

    return (
        <div className={isOpen ? 'cart-container show' : 'cart-container'}>
            <div className='cart'>
                <header>
                    <img src={Logo} alt='logo' />
                    <img className='close-cart-btn' 
                        src={CloseIcon} alt='close icon'
                        onClick={_ => toggleOpenCloseCart('CLOSE_CART')}/>
                </header>
                <section className='cart-body'>{
                    cart.map(item => {
                        return <CartItem key={item.id} {...item} />
                    })
                }</section>
                <footer>
                    <div className='total-price'>
                        <h4>Total:</h4>
                        <h4>${total}</h4>
                    </div>
                    <button onClick={clearCart}
                    className='btn clear-btn'>Clear Cart</button>
                </footer>
            </div>
        </div>
    );
}

export default CartContainer;