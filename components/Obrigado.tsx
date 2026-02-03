import React, { useEffect } from 'react';

const Obrigado: React.FC = () => {
  const pendingMessage = sessionStorage.getItem('pending_whatsapp_message');
  const defaultMessage = "Olá Darvil, gostaria de conversar sobre imóveis exclusivos.";
  const finalMessage = pendingMessage || defaultMessage;
  const targetLink = `https://wa.me/5548999278420?text=${encodeURIComponent(finalMessage)}`;

  useEffect(() => {
    /**
     * DISPARO DE CONVERSÃO DO GOOGLE ADS 
     * Este bloco é executado assim que o usuário aterrissa na página.
     */
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17927081644/cAd2CPiEzPEbEKydpuRC',
        'value': 1.0,
        'currency': 'BRL'
      });
      console.log("Evento de conversão do Google Ads disparado com sucesso.");
    }

    // Redirecionamento automático após exatamente 3 segundos
    const timer = setTimeout(() => {
      window.location.href = targetLink;
    }, 3000);

    return () => clearTimeout(timer);
  }, [targetLink]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-[#E2E8F0] selection:bg-[#D4AF37] selection:text-black" style={{ backgroundColor: '#040B14' }}>
      <div className="max-w-xl w-full text-center">
        {/* Identidade Visual */}
        <div className="mb-12 tracking-[0.3em] text-sm text-[#D4AF37] uppercase opacity-50 animate-pulse">
          Darvil Bianchet | Real Estate
        </div>

        <div className="bg-[#0B1526] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden animate-zoom-in">
          {/* Barra de Progresso de Luxo */}
          <div className="absolute top-0 left-0 w-full bg-white/5">
            <div 
              className="h-[2px] bg-[#D4AF37]"
              style={{ 
                animation: 'progress 3s linear forwards' 
              }}
            ></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
            Recebemos seu interesse.
          </h1>
          
          <p className="text-[#94A3B8] text-lg font-light mb-8">
            Iniciando atendimento exclusivo via WhatsApp em <span className="text-[#D4AF37] font-semibold">3 segundos...</span>
          </p>

          <div className="space-y-4">
            <a 
              href={targetLink} 
              className="inline-block w-full py-4 bg-[#D4AF37] text-black font-bold tracking-widest text-xs uppercase hover:bg-white transition-all duration-300 rounded-sm shadow-lg shadow-[#D4AF37]/20"
            >
              Ir para o WhatsApp Agora
            </a>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest italic">
              Gatilho de segurança: Redirecionamento automático ativo.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="font-serif italic text-[#94A3B8] text-lg">"A excelência está nos detalhes."</p>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-zoom-in {
          animation: zoomIn 0.5s ease-out forwards;
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Obrigado;