import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Lp, Info, Empresa } from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Lp />} />
      <Route path="/info/:infoType" element={<Info />} />
    </Routes>
  );
}
