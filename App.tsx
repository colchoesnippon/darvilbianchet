import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedLaunches from './components/FeaturedLaunches';
import ServiceProcess from './components/ServiceProcess';
import PropertyMatchQuiz from './components/PropertyMatchQuiz';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Inicialização segura do AOS
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 50,
        disable: window.innerWidth < 768 // Desabilita em mobile se necessário para performance
      });
    }
  }, []);

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