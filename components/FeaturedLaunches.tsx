import React, { useState } from 'react';
import { MapPin, ArrowRight, X, Check, Camera } from 'lucide-react';
import { FEATURED_LAUNCHES, WHATSAPP_LINK_BASE } from '../constants';
import { LaunchProperty } from '../types';

const FeaturedLaunches: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<LaunchProperty | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const openModal = (property: LaunchProperty) => {
    setSelectedProperty(property);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setFormData({ name: '', phone: '' });
    document.body.style.overflow = 'auto';
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProperty) return;

    const message = `Olá Darvil, vi o lançamento *${selectedProperty.title}* (${selectedProperty.neighborhood}) no seu site.\n\nMeu nome é *${formData.name}* e meu telefone é *${formData.phone}*.\nGostaria de mais detalhes sobre este imóvel.`;
    
    window.open(`${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(message)}`, '_blank');
    closeModal();
  };

  return (
    <section id="launches" className="py-24 bg-luxury-primary border-b border-white/5 relative">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Veja o que temos <span className="text-luxury-gold italic">agora</span> para você.
          </h2>
          <p className="text-luxury-muted font-light tracking-wide uppercase text-sm md:text-base">
            CONFIRA ABAIXO OS LANÇAMENTOS DISPONÍVEIS
          </p>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-8"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_LAUNCHES.map((property, idx) => (
            <div 
              key={property.id} 
              className="group bg-luxury-card border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 rounded-sm overflow-hidden flex flex-col shadow-lg"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image Container */}
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src={property.images[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-transparent to-transparent opacity-60"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 bg-luxury-secondary/90 backdrop-blur-sm px-3 py-1 text-xs text-luxury-gold border border-luxury-gold/20 tracking-wider">
                  {property.neighborhood.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-luxury-muted text-xs mb-3">
                  <MapPin size={14} className="text-luxury-gold" />
                  <span className="uppercase tracking-widest">{property.locationHighlight}</span>
                </div>
                
                <h3 className="text-2xl text-white font-light mb-2 group-hover:text-luxury-gold transition-colors">
                  {property.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {property.shortDescription}
                </p>

                <div className="mt-auto">
                  <button 
                    onClick={() => openModal(property)}
                    className="w-full py-3 border border-white/10 text-white text-xs tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase rounded-sm"
                  >
                    Ver Detalhes <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL / POPUP */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-luxury-primary/90 backdrop-blur-md animate-fade-in"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-luxury-secondary border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-fade-in-up flex flex-col md:flex-row">
            
            {/* Close Button Mobile */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white md:hidden"
            >
              <X size={20} />
            </button>

            {/* Gallery Side (Left/Top) */}
            <div className="w-full md:w-1/2 bg-black">
              <div className="h-[300px] md:h-full relative">
                <img 
                  src={selectedProperty.images[0]} 
                  alt={selectedProperty.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 text-white text-xs flex items-center gap-2 rounded">
                  <Camera size={14} /> + FOTOS
                </div>
              </div>
            </div>

            {/* Info & Form Side (Right/Bottom) */}
            <div className="w-full md:w-1/2 p-8 flex flex-col bg-luxury-secondary">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-luxury-gold text-xs tracking-widest uppercase block mb-2">
                    {selectedProperty.neighborhood} • {selectedProperty.locationHighlight}
                  </span>
                  <h3 className="text-3xl text-white font-light mb-4">{selectedProperty.title}</h3>
                </div>
                <button onClick={closeModal} className="text-gray-500 hover:text-white hidden md:block">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-300 font-light leading-relaxed text-sm">
                  {selectedProperty.fullDescription}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {selectedProperty.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-400 text-xs">
                      <Check size={12} className="text-luxury-gold" /> {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto bg-luxury-primary p-6 rounded-sm border border-white/5">
                <h4 className="text-white text-sm uppercase tracking-widest mb-4">Interesse neste imóvel?</h4>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu Nome"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-luxury-card border border-white/10 p-3 text-white text-sm focus:border-luxury-gold focus:outline-none rounded-sm"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Seu WhatsApp / Telefone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-luxury-card border border-white/10 p-3 text-white text-sm focus:border-luxury-gold focus:outline-none rounded-sm"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-luxury-gold hover:bg-white text-black font-medium py-3 text-sm tracking-widest transition-colors duration-300 uppercase rounded-sm"
                  >
                    Receber Informações
                  </button>
                </form>
                <p className="text-center text-[10px] text-gray-500 mt-3">
                  Você será redirecionado para o WhatsApp do corretor.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedLaunches;