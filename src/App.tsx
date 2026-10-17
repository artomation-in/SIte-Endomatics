/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import HomePage from './pages/HomePage';
import InsightsIndexPage from './pages/InsightsIndexPage';
import ArticlePage from './pages/ArticlePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-bg-light text-ink selection:bg-pulse-teal selection:text-steel-teal">
      <ScrollToTop />
      <Navbar onOpenDemo={openDemo} />

      <Routes>
        <Route path="/" element={<HomePage onOpenDemo={openDemo} />} />
        <Route path="/features" element={<HomePage onOpenDemo={openDemo} initialSection="features" />} />
        <Route path="/insights" element={<InsightsIndexPage />} />
        <Route path="/insights/:slug" element={<ArticlePage onOpenDemo={openDemo} />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer onOpenDemo={openDemo} />
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}
