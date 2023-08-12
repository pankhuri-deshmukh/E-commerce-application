import React from 'react';
import { Routes, Route } from "react-router-dom"
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <Routes>
      <Route path='/products' element={<ProductPage />} />
    </Routes>
  );
}

export default App;
