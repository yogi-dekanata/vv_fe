import React, {useState} from 'react';
import '../css/SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit} className="form-inline d-flex justify-content-center">
                <input
                    className="form-control search-input flex-grow-1"
                    type="search"
                    placeholder="Cari produk..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-outline-primary ml-2" type="submit">Cari</button>
            </form>
        </div>
    );
};

export default SearchBar;
