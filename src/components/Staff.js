import React, { useState, useEffect } from 'react';
import { getProducts } from '../firebase';
import './Staff.css';

const Staff = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Staff Inventory</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Category:</strong> {product.category} <br />
            <strong>Description:</strong> {product.description} <br />
            <strong>Name:</strong> {product.name} <br />
            <strong>Price:</strong> {product.price} <br />
            <strong>Quantity:</strong> {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;
