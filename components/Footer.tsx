import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';
import { BROKER_NAME, BROKER_PHONE, BROKER_CRECI } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02060D] py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg tracking-[0.2em] text-white uppercase mb-2">{BROKER_NAME}</h2>
          <p className="text-gray-500 text-xs font-light">CRECI SC {BROKER_CRECI}</p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href={`mailto:contato@darvil.com`} className="text-gray-400 hover:text-luxury-gold transition-colors">
            <Mail size={20} />
          </a>
          <a href={`https://wa.me/${BROKER_PHONE}`} className="text-gray-400 hover:text-luxury-gold transition-colors">
            <Phone size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-xs font-light text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p>Design de Alta Conversão</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;