import React from 'react';

import { useGlobalContext } from '../context/Context';
import ChevronDown from '../img/chevron-down-icon.svg';
import ChevronUp from '../img/chevron-up-icon.svg';

const CartItem = ({ id, title, price, image, amount }) => {
    const { removeCartItem, toggleAmount } = useGlobalContext();

    return (
        <article className="cart-item">
            <img src={image} alt={title} className="product-img" />
            <div className="product-info">
                <h4 className="product-title">{title}</h4>
                <h4 className="product-price">${price}</h4>
                <button
                    className="btn remove-btn"
                    onClick={(_) => removeCartItem(id)}
                >
                    remove item
                </button>
            </div>
            <div className="amount-box">
                <button
                    className="btn amount-btn"
                    onClick={(_) => toggleAmount(id, 'INCREASE')}
                >
                    <img src={ChevronUp} alt="Chevron Up" />
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="btn amount-btn"
                    onClick={(_) => toggleAmount(id, 'DECREASE')}
                >
                    <img src={ChevronDown} alt="Chevron Down" />
                </button>
            </div>
        </article>
    );
};

export default CartItem;
