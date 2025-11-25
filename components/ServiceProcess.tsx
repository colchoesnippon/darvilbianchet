import React from 'react';
import { MessageSquare, Filter, Key } from 'lucide-react';

const ServiceProcess: React.FC = () => {
  const steps = [
    {
      id: '01',
      icon: <MessageSquare size={32} />,
      title: "O Briefing",
      description: "Você me conta sua necessidade. Alinhamos o tipo de imóvel, o orçamento desejado e a região de preferência no Sul da Ilha."
    },
    {
      id: '02',
      icon: <Filter size={32} />,
      title: "A Curadoria",
      description: "Eu utilizo minha rede e expertise para filtrar o mercado e envio apenas as opções que realmente fazem sentido para você, poupando seu tempo."
    },
    {
      id: '03',
      icon: <Key size={32} />,
      title: "A Conquista",
      description: "Visitamos os imóveis selecionados juntos. Ofereço suporte jurídico e negocial completo para fecharmos o negócio com segurança e tranquilidade."
    }
  ];

  return (
    <section id="process" className="py-24 bg-luxury-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-luxury-primary to-transparent opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Metodologia</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4">
            3 Passos para seu <span className="italic font-serif text-luxury-muted">Imóvel Ideal</span>.
          </h2>
          <p className="text-luxury-muted font-light mt-4 max-w-2xl mx-auto">
            Uma jornada desenhada para eliminar ruídos e garantir assertividade na sua escolha.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="relative flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Number Circle */}
              <div className="w-24 h-24 rounded-full bg-luxury-primary border border-luxury-gold/20 flex items-center justify-center mb-8 relative z-10 group-hover:border-luxury-gold transition-colors duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <span className="text-3xl font-light text-luxury-gold font-serif">{step.id}</span>
                
                {/* Icon Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-luxury-gold text-black p-2 rounded-full transform scale-75 md:scale-100">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-2xl text-white font-light mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-luxury-muted font-light leading-relaxed text-sm md:text-base max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;