
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FactsSection from './components/FactsSection';
import PotentialSection from './components/PotentialSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import SciencePage from './components/SciencePage';
import HowItWorksPage from './components/HowItWorksPage';
import AboutPage from './components/AboutPage';
import SupplementsPage from './components/SupplementsPage';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import UserProfile from './components/UserProfile';
import RecommendationsPage from './components/RecommendationsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'science' | 'how-it-works' | 'about' | 'supplements' | 'login' | 'user-dashboard' | 'user-profile' | 'recommendations'>('home');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('user-dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <FactsSection />
            <PotentialSection />
            <TestimonialsSection />
            <PricingSection />
          </>
        );
      case 'science':
        return <SciencePage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'about':
        return <AboutPage />;
      case 'supplements':
        return <SupplementsPage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'user-dashboard':
        return isLoggedIn ? <UserDashboard onNavigate={setCurrentPage} /> : <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'user-profile':
        return isLoggedIn ? <UserProfile onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'recommendations':
        return isLoggedIn ? <RecommendationsPage onNavigate={setCurrentPage} /> : <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen selection:bg-red-500/30">
      {/* Background Orbs for Atmosphere */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 blur-[100px] rounded-full" />
      </div>

      <Navbar onNavigate={setCurrentPage} onLogout={handleLogout} currentPage={currentPage} isLoggedIn={isLoggedIn} />
      
      <main>
        {renderContent()}
      </main>
      
      {/* Only show footer on public pages */}
      {['home', 'science', 'how-it-works', 'about', 'supplements'].includes(currentPage) && (
        <Footer onNavigate={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
