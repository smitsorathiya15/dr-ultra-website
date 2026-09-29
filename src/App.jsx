import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

/**
 * App
 * ------------------------------------------------------------------
 * Root component: declares every route the site supports and wraps
 * each page in the shared Layout (Navbar/Footer). This is the only
 * file that needs to change when a new page is added to the site.
 * ------------------------------------------------------------------
 */
class App extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </>
    );
  }
}

export default App;
