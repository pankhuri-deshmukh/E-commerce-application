import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  product_id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  quantity: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get<Product>(`http://localhost:3001/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching product data.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
    <div>
      <h1 className='text-xl font-bold text-blue-700 mt-4'>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
    <button>Buy</button>
    <div>
        {/* Reviews */}
    </div>
    </>

  );
};

export default ViewProduct;
