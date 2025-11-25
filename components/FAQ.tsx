import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK_BASE } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open(`${WHATSAPP_LINK_BASE}?text=Olá Darvil, li as dúvidas frequentes no site e gostaria de conversar mais.`, '_blank');
  };

  const questions: FAQItem[] = [
    {
      question: "Por que investir no Sul da Ilha agora?",
      answer: "O Sul da Ilha vive um momento único de valorização impulsionado pelo novo acesso ao aeroporto e obras de infraestrutura, mantendo, contudo, sua essência natural. É a região de Florianópolis com maior potencial de retorno sobre investimento (ROI) a médio prazo."
    },
    {
      question: "Como funciona a segurança jurídica na compra?",
      answer: "Todas as transações são acompanhadas de uma Due Diligence completa. Verificamos matrículas, certidões negativas e viabilidade construtiva antes de qualquer sinal. Minha assessoria garante que você não terá surpresas burocráticas."
    },
    {
      question: "Moro fora de Florianópolis, consigo comprar à distância?",
      answer: "Sim. Hoje 60% dos meus clientes são de fora. Realizamos visitas por vídeo chamada de alta resolução, enviamos tour virtual 360º e todo o processo de assinatura de contrato pode ser feito digitalmente com validade jurídica."
    },
    {
      question: "Vocês trabalham com imóveis 'Off-Market'?",
      answer: "Exatamente. Muitos proprietários de alto padrão preferem não anunciar publicamente por questões de privacidade. Tenho acesso a uma carteira exclusiva de imóveis que não estão nos portais tradicionais."
    },
    {
      question: "Quero vender meu imóvel. Como é a divulgação?",
      answer: "Trabalhamos com uma estratégia de marketing direcionado. Produção audiovisual profissional, tráfego pago segmentado para investidores e conexão direta com nossa base de clientes qualificados. Não apenas 'plaqueamos' seu imóvel, nós o vendemos."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-luxury-primary border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase">Tire suas dúvidas</span>
          <h2 className="text-3xl md:text-5xl font-light text-white mt-4">
            Investimento com <span className="italic font-serif text-luxury-muted">Clareza</span>.
          </h2>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className={`border transition-colors duration-200 rounded-sm overflow-hidden ${
                openIndex === index 
                ? 'border-luxury-gold/30 bg-luxury-card' 
                : 'border-white/5 bg-transparent hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-transparent"
              >
                <span className={`text-lg font-light transition-colors duration-200 ${openIndex === index ? 'text-white' : 'text-gray-400'}`}>
                  {item.question}
                </span>
                <span className={`ml-4 flex-shrink-0 ${openIndex === index ? 'text-luxury-gold' : 'text-gray-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              {/* Simple Conditional Rendering - No complex transitions to avoid bugs */}
              {openIndex === index && (
                <div className="p-6 pt-0 text-luxury-muted font-light leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <p className="text-luxury-muted mb-6 font-light">
            Sua dúvida não está aqui? Fale diretamente comigo.
          </p>
          <button 
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-luxury-gold text-black font-bold tracking-widest rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] uppercase text-sm"
          >
            <MessageCircle size={18} />
            Tirar Dúvidas no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;