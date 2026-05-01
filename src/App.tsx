import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import { MainLayout } from './components/MainLayout';
import { AdminLayout } from './components/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Industries } from './pages/Industries';
import { Sustainability } from './pages/Sustainability';
import { Manufacturing } from './pages/Manufacturing';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminCategories } from './pages/admin/AdminCategories';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminInquiries } from './pages/admin/AdminInquiries';
import { AdminCareers } from './pages/admin/AdminCareers';

import { AdminDashboard } from './pages/admin/AdminDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="industries" element={<Industries />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Auth Route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Protected Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="inquiries" element={<AdminInquiries />} />
            <Route path="careers" element={<AdminCareers />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
