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

// Define AOS on window to avoid TS errors without specific types installed
declare global {
  interface Window {
    AOS: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Animate On Scroll
    if (window.AOS) {
      window.AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-out-cubic',
        offset: 100,
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