import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedLaunches from './components/FeaturedLaunches';
import ServiceProcess from './components/ServiceProcess';
import PropertyMatchQuiz from './components/PropertyMatchQuiz';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Obrigado from './components/Obrigado';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Inicialização segura do AOS
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 50,
        disable: window.innerWidth < 768
      });
    }

    // Custom listener for internal navigation events (fixes SecurityError on pushState)
    const handleAppNav = (e: any) => {
      setCurrentPath(e.detail);
      window.scrollTo(0, 0);
    };

    // Standard listener for browser back/forward buttons (if supported)
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('app-nav', handleAppNav);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('app-nav', handleAppNav);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Robust routing check for the conversion trigger page
  // Using includes('obrigado') to match regardless of extension or query params
  if (currentPath.toLowerCase().includes('obrigado')) {
    return <Obrigado />;
  }

  return (
    <div className="min-h-screen bg-luxury-primary text-luxury-text selection:bg-luxury-gold selection:text-black font-sans">
      <Header />
      <main>
        <Hero />
        <ServiceProcess />
        <About />
        <FeaturedLaunches />
        <PropertyMatchQuiz />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;