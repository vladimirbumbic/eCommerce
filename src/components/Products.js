import React from 'react';

import { useGlobalContext } from '../context/Context';
import products from '../data/Data';

function Products() {
    const { addItemToCart } = useGlobalContext();

    return (
        <div className="products">
            <div className="product-center">
                {products.map((product) => {
                    const { id, title, price, image } = product;
                    return (
                        <article key={id} className="product">
                            <header>
                                <img
                                    className="img-fluid"
                                    src={image}
                                    alt={title}
                                />
                                <div className="btn-overlay">
                                    <button
                                        className="btn"
                                        onClick={(_) => addItemToCart(product)}
                                    >
                                        Add item
                                    </button>
                                </div>
                            </header>
                            <footer>
                                <div className="product-info">
                                    <h4 className="product-title">{title}</h4>
                                </div>
                                <h4 className="product-price">${price}</h4>
                            </footer>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;
