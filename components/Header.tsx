import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BROKER_NAME, NAV_LINKS, navigateToWhatsApp } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    navigateToWhatsApp('Olá Darvil, gostaria de saber mais sobre imóveis exclusivos.');
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-luxury-primary/80 backdrop-blur-md border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-light tracking-[0.2em] text-white hover:text-luxury-gold transition-colors duration-300">
          {BROKER_NAME}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-sm font-light tracking-wide text-luxury-muted hover:text-luxury-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            className="px-6 py-2 border border-luxury-gold/50 text-luxury-gold text-sm tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300 rounded-sm"
          >
            FALE COMIGO
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-luxury-primary/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 animate-fade-in shadow-2xl">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-light text-white hover:text-luxury-gold"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            className="px-8 py-3 bg-luxury-gold text-black text-sm tracking-widest font-medium rounded-sm"
          >
            FALE COMIGO
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;