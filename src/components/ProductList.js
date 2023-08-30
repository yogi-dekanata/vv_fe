// ProductList.js

import React from 'react';
import '../css/ProductList.css';

const ProductList = ({products, onAddOrder, onRemoveOrder}) => {
    return (
        <div>
            <h2>Daftar Produk</h2>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <img
                            src="https://via.placeholder.com/150"
                            alt={product.name}
                            className="product-image"
                        />
                        <div>
                            <strong>{product.name}</strong> - {product.price}
                            <br/>
                            Stock: {product.stock}
                        </div>
                        <div>
                            <button className="icon-button" onClick={() => onRemoveOrder(product.id)}>-</button>
                            <button className="icon-button" onClick={() => onAddOrder(product.id)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
