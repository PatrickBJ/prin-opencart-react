import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Lp,
  Page1,
  Page2,
} from '@/pages';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Lp} />
        <Route path="/page1" Component={Page1} />
        <Route path="/page2" Component={Page2} />
      </Routes>
    </BrowserRouter>
  );
}