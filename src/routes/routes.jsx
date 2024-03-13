import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound, Lp, Info, Login, Products, ProductDetail } from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Lp />} />
      <Route path="/info/:infoType" element={<Info />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="/produtos/:category?/:product?/" element={<Products />} />
      <Route path="/produto/:product/" element={<ProductDetail />} />
    </Routes>
  );
}
