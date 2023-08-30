import React from 'react';

const ProductDetail = ({product}) => {
    // ...


    const addToCart = (productId, quantity = 1) => {
        fetch('/api/add-to-cart/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({product_id: productId, quantity}),
        })
            .then(response => response.json())
            .then(data => {
                // Update cart state or navigate user to cart page
            });
    }
    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>  {/* Menampilkan stok */}
            {/* ... */}
            <h1>{product.name}</h1>
            <p>Category: {product.category.name}</p>
            <button onClick={() => addToCart(product.id)} disabled={product.stock <= 0}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
