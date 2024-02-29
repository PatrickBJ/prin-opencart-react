import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Lp,
  Page1,
  Page2,
} from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Lp />} /> {}
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}
