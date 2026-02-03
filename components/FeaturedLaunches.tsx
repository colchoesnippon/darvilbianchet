import React, { useState } from 'react';
import { MapPin, ArrowRight, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURED_LAUNCHES, navigateToWhatsApp } from '../constants';
import { LaunchProperty } from '../types';

const FeaturedLaunches: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<LaunchProperty | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '' });

  const openModal = (property: LaunchProperty) => {
    setSelectedProperty(property);
    setActiveSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setFormData({ name: '' });
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (selectedProperty) {
      setActiveSlide((prev) => (prev + 1) % selectedProperty.images.length);
    }
  };

  const prevSlide = () => {
    if (selectedProperty) {
      setActiveSlide((prev) => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProperty) return;

    const message = `Olá Darvil, desejo informações exclusivas sobre o lançamento *${selectedProperty.title}*. Meu nome é ${formData.name}.`;
    navigateToWhatsApp(message);
  };

  return (
    <section id="launches" className="py-24 bg-luxury-primary border-b border-white/5 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Confira os <span className="text-luxury-gold italic">Lançamentos Exclusivos</span>
          </h2>
          <div className="w-24 h-[1px] bg-luxury-gold mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_LAUNCHES.map((property) => (
            <div 
              key={property.id} 
              className="group bg-luxury-card border border-white/5 hover:border-luxury-gold/30 transition-all duration-500 rounded-sm overflow-hidden flex flex-col shadow-xl"
            >
              <div className="relative h-[350px] overflow-hidden">
                <img 
                  src={property.images[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-luxury-gold px-3 py-1 text-[10px] text-black font-bold tracking-[0.2em] uppercase">
                  {property.neighborhood}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors">
                  {property.title}
                </h3>
                <p className="text-luxury-muted text-sm font-light mb-8 line-clamp-3">
                  {property.shortDescription}
                </p>
                <button 
                  onClick={() => openModal(property)}
                  className="mt-auto w-full py-4 border border-white/10 text-white text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase rounded-sm flex justify-center items-center gap-3"
                >
                  Explorar Detalhes <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProperty && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-luxury-primary/95 backdrop-blur-xl animate-fade-in" onClick={closeModal}></div>
          
          <div className="relative bg-luxury-secondary border border-white/10 w-full max-w-6xl max-h-full overflow-y-auto no-scrollbar rounded-sm shadow-2xl flex flex-col lg:flex-row animate-zoom-in">
            
            <button onClick={closeModal} className="absolute top-6 right-6 z-[110] text-white/50 hover:text-luxury-gold transition-colors">
              <X size={32} />
            </button>

            {/* Left: Slider */}
            <div className="w-full lg:w-[60%] bg-black relative h-[400px] lg:h-auto min-h-[400px] overflow-hidden group">
              {selectedProperty.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                />
              ))}
              
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-luxury-gold hover:text-black p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-luxury-gold hover:text-black p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100">
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProperty.images.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveSlide(idx)} className={`h-1 transition-all rounded-full ${activeSlide === idx ? 'w-8 bg-luxury-gold' : 'w-2 bg-white/30'}`}></button>
                ))}
              </div>

              {selectedProperty.videoUrl && (
                <button 
                  onClick={() => window.open(selectedProperty.videoUrl, '_blank')}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white hover:bg-luxury-gold hover:text-black transition-all group/btn"
                >
                  <Play size={24} fill="currentColor" />
                  <span className="text-xs tracking-widest font-bold">VER VÍDEO TOUR</span>
                </button>
              )}
            </div>

            {/* Right: Info */}
            <div className="w-full lg:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-luxury-secondary">
              <div className="mb-8">
                <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase block mb-3 font-bold">{selectedProperty.neighborhood}</span>
                <h3 className="text-4xl text-white font-light font-serif mb-6 leading-tight">{selectedProperty.title}</h3>
                <p className="text-luxury-muted font-light leading-relaxed mb-8">{selectedProperty.fullStory}</p>
              </div>

              <div className="mb-10">
                <h4 className="text-white text-[10px] tracking-[0.2em] uppercase font-bold mb-6 border-b border-white/10 pb-2">Diferenciais do Projeto</h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProperty.features.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
                      <span className="text-gray-300 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto bg-luxury-primary/50 p-8 rounded-sm border border-luxury-gold/20 shadow-xl">
                <h5 className="text-white text-sm mb-6 text-center">Interesse em uma unidade exclusiva?</h5>
                <form onSubmit={handleFormSubmit}>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu Nome Completo" 
                    value={formData.name}
                    onChange={(e) => setFormData({name: e.target.value})}
                    className="w-full bg-luxury-card border border-white/5 p-4 text-white text-sm mb-4 outline-none focus:border-luxury-gold transition-colors"
                  />
                  <button type="submit" className="w-full bg-luxury-gold text-black font-bold py-4 text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-white transition-all shadow-lg">
                    Garantir Condição Especial
                  </button>
                </form>
                <p className="text-center text-[10px] text-gray-500 mt-4 italic">Fale diretamente com o especialista via WhatsApp.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedLaunches;