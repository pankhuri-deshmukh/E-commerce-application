import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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

const ProductPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
 

  useEffect(() => {
    axios.get<Product[]>("http://localhost:3001/products/").then((response) => {
      setAllProducts(response.data);
    });
  }, []);

  let navigate = useNavigate()

  return (
    <>
    <Link to="/products/add">
        <button className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Product</button>
    </Link>
      {allProducts.map((item) => (
        <div className='cursor-pointer' key={item.product_id} onClick={() => {
          navigate(`/products/${item.product_id}`)
        }}>
          {/* <Link to={`/products/${item.product_id}`}> */}
          <h1 className='text-xl font-bold text-blue-700 mt-4'>{item.name}</h1>
          {/* </Link> */}
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Category: {item.category}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </>
  );
}

export default ProductPage;
