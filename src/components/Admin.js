import React, { useState } from 'react';
import { addProduct } from '../firebase';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = () => {
    const productData = {
      name: productName,
      category,
      description,
      price: parseFloat(price), 
      quantity: parseInt(quantity), 
    };

    addProduct(productData)
      .then(() => {
        console.log('Product added successfully!');
        // Reset the input fields after adding the product
        setProductName('');
        setCategory('');
        setDescription('');
        setPrice('');
        setQuantity('');
      })
      .catch((error) => {
        console.error('Error adding product: ', error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Admin;
