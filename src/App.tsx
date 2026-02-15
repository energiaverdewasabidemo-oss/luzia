import React from 'react';
import { useState, useCallback } from 'react';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import LegalNotice from './components/LegalNotice';
import AboutUsPage from './components/AboutUsPage';
import TrustPage from './components/TrustPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import ComparadorLanding from './components/ComparadorLanding';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import ComparatorSection from './components/ComparatorSection';
import TrustSection from './components/TrustSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingChatButton from './components/FloatingChatButton';
import ChatBot from './components/ChatBot';
import CookiePopup from './components/CookiePopup';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialMessage, setInitialMessage] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  const handleChatOpen = useCallback((message = '') => {
    setInitialMessage(message);
    setIsChatOpen(true);
  }, []);

  const handleChatClose = () => {
    setIsChatOpen(false);
    setInitialMessage('');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleChatAction = () => {
    handleChatOpen('Hola, quiero información sobre LUZIA');
  };

  // Render legal pages
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'cookies') {
    return <CookiePolicy onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'legal') {
    return <LegalNotice onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'about') {
    return <AboutUsPage onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'trust') {
    return <TrustPage onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'contact') {
    return <ContactPage onBack={handleBackToHome} />;
  }
  
  if (currentPage === 'comparador') {
    return <ComparadorLanding onBack={handleBackToHome} onChatOpen={handleChatOpen} />;
  }
  
  if (currentPage === 'chat') {
    handleChatAction();
    setCurrentPage('home');
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onChatOpen={handleChatOpen} onPageChange={handlePageChange} />
      <HeroSection onChatOpen={handleChatOpen} />
      <BenefitsSection onChatOpen={handleChatOpen} />
      <HowItWorksSection onChatOpen={handleChatOpen} />
      <TestimonialsSection />
      <ComparatorSection onChatOpen={handleChatOpen} />
      <TrustSection />
      <FinalCTASection onChatOpen={handleChatOpen} />
      <Footer onPageChange={handlePageChange} />
      <FloatingChatButton onClick={handleChatOpen} />
      <ChatBot isOpen={isChatOpen} onClose={handleChatClose} initialMessage={initialMessage} />
      <CookiePopup onPageChange={handlePageChange} />
    </div>
  );
}

export default App;