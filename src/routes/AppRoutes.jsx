import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AITranslatorPage from '../pages/AITranslatorPage';
import LegalDocTranslatorPage from '../pages/LegalDocTranslatorPage';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
// import FeaturesPage from '../pages/FeaturesPage';
import Navbar from '../components/layout/Navbar'; // **Import statement here**
import  Footer  from '../components/layout/Footer'; // **Import statement here**
// import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* **Header component is used here** */}
      <main className="flex-1">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<FeaturesPage />} /> */}
          <Route path="/ai-translator" element={<AITranslatorPage />} />
          <Route path="/legal-translator" element={<LegalDocTranslatorPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
      <Footer /> {/* **Footer component is used here** */}
    </div>
  );
};

export default AppRoutes;