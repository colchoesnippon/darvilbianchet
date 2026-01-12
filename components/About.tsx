import React from 'react';
import { PLACEHOLDER_IMAGES, BROKER_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-luxury-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="aspect-[3/4] max-w-md mx-auto relative z-10 overflow-hidden rounded-sm shadow-xl">
              <img 
                src={PLACEHOLDER_IMAGES.brokerAbout} 
                alt={BROKER_NAME} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </div>
            {/* Decorative Gold Box */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-luxury-gold/30 z-0 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase block mb-4">Sobre o Especialista</span>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
              Mais que um corretor, <br />
              <span className="italic font-serif text-luxury-muted">seu parceiro de investimentos.</span>
            </h2>
            
            <div className="space-y-6 text-luxury-muted font-light text-lg leading-relaxed">
              <p>
                Com anos de atuação no mercado de alto padrão, especializei-me em conectar compradores exigentes às propriedades mais exclusivas do Sul da Ilha.
              </p>
              <p>
                Minha abordagem é baseada na discrição, na análise técnica precisa e, acima de tudo, na compreensão profunda do estilo de vida que Florianópolis oferece.
              </p>
              <p>
                Seja para morar ou investir, meu compromisso é entregar uma experiência imobiliária sem atritos e com máxima rentabilidade.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-4xl font-light text-white mb-2">+100mi</p>
                <p className="text-xs uppercase tracking-widest text-luxury-muted">Comercializado</p>
              </div>
              <div>
                <p className="text-4xl font-light text-white mb-2">Sul da Ilha</p>
                <p className="text-xs uppercase tracking-widest text-luxury-muted">Especialidade</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;