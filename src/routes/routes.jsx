import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Lp,
  Page1,
  Page2,
} from '@/pages';
import { Empresa } from '@/pages/informations';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Lp />} />
      <Route path="/a-empresa" element={<Empresa />} />
    </Routes>
  );
}
