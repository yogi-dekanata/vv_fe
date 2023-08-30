import React, {useState} from 'react';

const Admin = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const addProduct = () => {
        fetch('/api/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, price}),
        })
            .then(response => response.json())
            .then(data => {
                // Handle success
            });
    };

    return (
        <div>
            <h1>Add Product</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={addProduct}>Add</button>
        </div>
    );
};

export default Admin;
