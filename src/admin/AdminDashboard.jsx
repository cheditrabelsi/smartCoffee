import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ServerManagement from './ServerManagement';
import CategoryManagement from './CategoryManagement';
import ProductManagement from './ProductManagement';
import OrdersView from './OrdersView';
import './AdminDashboard.css';


function AdminDashboard() {
  return (
    <div className="admin-container">
      <aside>
        <h2>Admin VKUS</h2>
        <nav>
          <Link to="servers">👤 Serveurs</Link>
          <Link to="categories">📂 Catégories</Link>
          <Link to="products">🥐 Produits</Link>
          <Link to="orders">📋 Commandes</Link>
        </nav>
      </aside>
      <main>
        <Routes>
          <Route path="servers" element={<ServerManagement />} />
          <Route path="categories" element={<CategoryManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="orders" element={<OrdersView />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminDashboard;
