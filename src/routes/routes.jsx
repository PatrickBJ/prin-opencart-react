import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Lp, Info, Login } from '@/pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Lp />} />
      <Route path="/info/:infoType" element={<Info />} />
      <Route path="/account/login" element={<Login />} />
    </Routes>
  );
}
