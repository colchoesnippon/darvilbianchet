import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { PLACEHOLDER_IMAGES, BROKER_NAME, BROKER_CRECI } from '../constants';

const Hero: React.FC = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden bg-luxury-primary">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={PLACEHOLDER_IMAGES.hero} 
          alt="Luxury Residence Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient set to match the Royal Navy theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-primary via-luxury-primary/80 to-luxury-primary/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-primary/40 to-luxury-primary"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="text-center lg:text-left order-1" data-aos="fade-right" data-aos-duration="1000">
            <span className="inline-block py-1 px-3 border border-luxury-gold/30 rounded-full text-xs font-medium tracking-[0.2em] text-luxury-gold mb-6 backdrop-blur-sm bg-luxury-gold/5">
              SUL DA ILHA • CENTRO • NORTE DA ILHA
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6">
              Seu imóvel certo <br className="hidden lg:block"/>
              em Florianópolis, <br />
              <span className="font-semibold text-luxury-gold italic">sem perda de tempo.</span>
            </h1>
            
            <p className="text-luxury-muted text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 opacity-90">
              Me diga o que você procura e eu disponibilizo as melhores opções atualizadas e disponíveis com total segurança e transparência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToQuiz}
                className="group relative px-8 py-4 bg-luxury-gold text-black font-bold tracking-widest overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] rounded-sm text-sm md:text-base"
              >
                <span className="relative z-10">ENCONTRAR MEU IMÓVEL</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out opacity-30"></div>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Broker Image & Card */}
          <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1200">
            {/* Glow Effect behind image */}
            <div className="absolute inset-0 bg-blue-900/30 blur-[100px] rounded-full transform translate-x-10"></div>
            
            <div className="relative w-full max-w-md">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[3/4] md:aspect-auto md:h-[600px]">
                <img 
                  src={PLACEHOLDER_IMAGES.brokerHero} 
                  alt={BROKER_NAME}
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient overlay on image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/90 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-4 md:-left-12 bg-luxury-card border border-white/5 p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-[280px] md:max-w-[320px] backdrop-blur-xl">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                  <div>
                    <p className="text-white font-medium text-lg leading-snug">
                      Sou o {BROKER_NAME}, <br/>
                      <span className="text-luxury-muted font-light">corretor local.</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg px-3 py-2 w-fit">
                  <CheckCircle2 size={14} className="text-luxury-gold" />
                  <span className="text-xs text-gray-300 tracking-wider">CRECI SC {BROKER_CRECI}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-pointer hidden md:block" onClick={scrollToQuiz}>
        <ArrowDown size={24} className="text-white" />
      </div>
    </section>
  );
};

export default Hero;