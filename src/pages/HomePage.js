import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [totalOrder, setTotalOrder] = useState(0);
  const [products, setProducts] = useState([]);
  const { user } = useContext(UserContext);

  const fetchProducts = () => {
    fetch('http://localhost:8000/api/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    fetch(`http://localhost:8000/api/search-products/?q=${query}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('There was an error fetching the products:', error);
      });
  };

  const handleAddOrder = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
      const price = parseFloat(product.price);
      setTotalOrder(totalOrder + price);
      setProducts(products.map(p => p.id === productId ? { ...p, stock: p.stock - 1 } : p));
    }
  };

  const handleRemoveOrder = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      const price = parseFloat(product.price);
      if (totalOrder >= price) {
        setTotalOrder(totalOrder - price);
        setProducts(products.map(p => p.id === productId ? { ...p, stock: p.stock + 1 } : p));
      }
    }
  };

  return (
    <div>
      <Header />
      {user ? <h1>Selamat datang, {user.username}!</h1> : <h1>Silakan masuk atau daftar</h1>}
      <h5>Total Pesanan: {Number(totalOrder).toFixed(2)}</h5>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-12">
            <h5>Semua Produk</h5>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="mb-4">
              <ProductList
                products={products}
                onAddOrder={handleAddOrder}
                onRemoveOrder={handleRemoveOrder}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
