import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Home, DollarSign, User, MapPin } from 'lucide-react';
import { QuizState } from '../types';
import { navigateToWhatsApp } from '../constants';

const PropertyMatchQuiz: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    step: 1,
    objective: '',
    propertyType: '',
    location: '',
    budget: '',
    name: ''
  });

  const handleSelection = (field: keyof QuizState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (state.step < 4) setState(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const prevStep = () => {
    if (state.step > 1) setState(prev => ({ ...prev, step: prev.step - 1 }));
  };

  const handleFinalSubmit = () => {
    if (!state.name) return;

    let message = `Olá Darvil, me chamo *${state.name}*.\n`;
    message += `Meu objetivo é: *${state.objective}*.\n`;

    if (state.objective === 'Vender') {
      message += `O imóvel fica em: *${state.location}*.\n`;
    } else {
      message += `Busco: *${state.propertyType}*.\n`;
    }
    
    message += `Faixa de valor: *${state.budget}*.\n`;
    message += `Gostaria de ver oportunidades exclusivas.`;

    navigateToWhatsApp(message);
  };

  const isStepValid = () => {
    switch (state.step) {
      case 1: return !!state.objective;
      case 2: return state.objective === 'Vender' ? !!state.location : !!state.propertyType;
      case 3: return !!state.budget;
      case 4: return !!state.name && state.name.length > 2;
      default: return false;
    }
  };

  return (
    <section id="quiz" className="py-24 bg-luxury-primary relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Property Match</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4">Encontre a oportunidade ideal.</h2>
          <p className="text-luxury-muted mt-4 font-light">Responda a 4 perguntas rápidas para receber uma curadoria personalizada.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-luxury-card border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <div 
              className="h-full bg-luxury-gold transition-all duration-500 ease-out"
              style={{ width: `${(state.step / 4) * 100}%` }}
            ></div>
          </div>

          <div className="mt-4 min-h-[300px] flex flex-col justify-center">
            {/* STEP 1: OBJECTIVE */}
            {state.step === 1 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl text-white mb-8 font-light flex items-center gap-3">
                  <Home className="text-luxury-gold" size={24} /> 
                  Qual é o seu objetivo hoje?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Comprar', 'Vender', 'Investir'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelection('objective', opt)}
                      className={`p-6 border rounded-sm transition-all duration-300 text-left hover:border-luxury-gold ${
                        state.objective === opt 
                        ? 'border-luxury-gold bg-luxury-gold/10 text-white' 
                        : 'border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className="text-lg tracking-wide">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: TYPE OR LOCATION */}
            {state.step === 2 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl text-white mb-8 font-light flex items-center gap-3">
                  {state.objective === 'Vender' ? <MapPin className="text-luxury-gold" /> : <Home className="text-luxury-gold" />}
                  {state.objective === 'Vender' ? 'Onde fica seu imóvel?' : 'Que tipo de imóvel busca?'}
                </h3>
                
                {state.objective === 'Vender' ? (
                  <input
                    type="text"
                    placeholder="Ex: Campeche, Novo Campeche..."
                    value={state.location}
                    onChange={(e) => handleSelection('location', e.target.value)}
                    className="w-full bg-luxury-primary/50 border border-white/20 p-4 rounded-sm text-white focus:border-luxury-gold focus:outline-none transition-colors"
                  />
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {['Casa', 'Casal em Condomínio', 'Apartamento', 'Cobertura', 'Terreno', 'Outros'].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelection('propertyType', opt)}
                        className={`p-5 border rounded-sm transition-all duration-300 flex justify-between items-center ${
                          state.propertyType === opt 
                          ? 'border-luxury-gold bg-luxury-gold/10 text-white' 
                          : 'border-white/10 text-gray-400 hover:border-luxury-gold hover:text-white'
                        }`}
                      >
                        {opt}
                        {state.propertyType === opt && <Check size={18} className="text-luxury-gold" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: BUDGET */}
            {state.step === 3 && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl text-white mb-8 font-light flex items-center gap-3">
                  <DollarSign className="text-luxury-gold" />
                  Qual sua expectativa de valor?
                </h3>
                <div className="space-y-4">
                  {['R$ 1.5mi - R$ 3mi', 'R$ 3mi - R$ 5mi', 'Acima de R$ 5mi'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleSelection('budget', opt)}
                      className={`w-full p-5 border rounded-sm transition-all duration-300 text-left ${
                        state.budget === opt 
                        ? 'border-luxury-gold bg-luxury-gold/10 text-white' 
                        : 'border-white/10 text-gray-400 hover:border-luxury-gold hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: NAME & SUBMIT */}
            {state.step === 4 && (
              <div className="animate-fade-in-up">
                 <h3 className="text-2xl text-white mb-8 font-light flex items-center gap-3">
                  <User className="text-luxury-gold" />
                  Para finalizar, como devo te chamar?
                </h3>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={state.name}
                  onChange={(e) => handleSelection('name', e.target.value)}
                  className="w-full bg-luxury-primary/50 border border-white/20 p-4 rounded-sm text-white focus:border-luxury-gold focus:outline-none transition-colors mb-8"
                  onKeyDown={(e) => e.key === 'Enter' && handleFinalSubmit()}
                />
                
                <button
                  onClick={handleFinalSubmit}
                  disabled={!isStepValid()}
                  className={`w-full py-5 font-medium tracking-widest text-sm uppercase transition-all duration-300 rounded-sm ${
                    isStepValid() 
                    ? 'bg-luxury-gold text-black hover:bg-white' 
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Ver Oportunidades Exclusivas
                </button>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-10 pt-6 border-t border-white/5">
            <button 
              onClick={prevStep} 
              disabled={state.step === 1}
              className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                state.step === 1 ? 'text-gray-700 cursor-not-allowed' : 'text-gray-400 hover:text-white'
              }`}
            >
              <ArrowLeft size={16} /> Voltar
            </button>

            {state.step < 4 && (
              <button 
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                  !isStepValid() ? 'text-gray-700 cursor-not-allowed' : 'text-luxury-gold hover:text-white'
                }`}
              >
                Próximo <ArrowRight size={16} />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyMatchQuiz;