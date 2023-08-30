import React, {useEffect, useState} from 'react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/categories/')
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h1>Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
