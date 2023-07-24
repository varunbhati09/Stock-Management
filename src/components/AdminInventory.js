import React, { useState, useEffect } from 'react';
import { firestore, updateProduct, deleteProduct } from '../firebase';
import './AdminInventory.css';

const AdminInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    const fetchProducts = async () => {
      try {
        const snapshot = await firestore.collection('products').get();
        const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products: ', error);
      }
    };

    fetchProducts();
  }, []);

  const handleUpdateProduct = (productId, updatedProductData) => {
    updateProduct(productId, updatedProductData);
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div>
      <h2>Admin Inventory</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - {product.price} - {product.quantity}
            <button onClick={() => handleUpdateProduct(product.id, { quantity: product.quantity + 1 })}>Increase Quantity</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminInventory;
