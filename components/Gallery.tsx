import React from 'react';
import { PLACEHOLDER_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const images = [
    { src: PLACEHOLDER_IMAGES.lifestyle1, title: "Interiores Modernos" },
    { src: PLACEHOLDER_IMAGES.lifestyle2, title: "Lazer Exclusivo" },
    { src: PLACEHOLDER_IMAGES.lifestyle3, title: "Vistas Definitivas" },
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-secondary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12" data-aos="fade-up">
          <div>
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Lifestyle</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-2">Viver o Extraordinário.</h2>
          </div>
          <p className="text-luxury-muted font-light mt-4 md:mt-0 max-w-md text-sm md:text-base">
            Uma seleção visual do estilo de vida que espera por você no sul da ilha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] overflow-hidden cursor-pointer rounded-sm"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/90 via-transparent to-transparent opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-8 left-8">
                <p className="text-luxury-gold text-xs uppercase tracking-widest mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Florianópolis
                </p>
                <h3 className="text-2xl text-white font-light">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;