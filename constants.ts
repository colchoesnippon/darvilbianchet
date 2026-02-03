import { NavItem, LaunchProperty } from './types';

export const BROKER_NAME = "DARVIL BIANCHET";
export const BROKER_CRECI = "58927";
export const BROKER_PHONE = "5548999278420";
export const WHATSAPP_LINK_BASE = `https://wa.me/${BROKER_PHONE}`;
export const THANK_YOU_PATH = "/obrigado";

/**
 * Manages navigation to the Thank You page.
 * Uses a custom event because history.pushState is blocked in some framed environments.
 * Stores the pending message in sessionStorage to be retrieved by the Thank You page.
 */
export const navigateToWhatsApp = (message?: string) => {
  // 1. Dispara a conversão do Google Ads (Snippet de Clique)
  if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
    (window as any).gtag_report_conversion();
  }

  // 2. Salva a mensagem personalizada do Quiz (se houver)
  if (message) {
    sessionStorage.setItem('pending_whatsapp_message', message);
  } else {
    sessionStorage.removeItem('pending_whatsapp_message');
  }

  // 3. Navega para a página de Obrigado para registrar a conversão visual
  const event = new CustomEvent('app-nav', { detail: THANK_YOU_PATH });
  window.dispatchEvent(event);
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Processo', href: '#process' },
  { label: 'Sobre', href: '#about' },
  { label: 'Lançamentos', href: '#launches' },
  { label: 'Match', href: '#quiz' },
  { label: 'Lifestyle', href: '#gallery' },
];

export const PLACEHOLDER_IMAGES = {
  hero: "https://colchoesnippon.com/wp-content/uploads/2025/11/sul-da-ilha-corretor-imoveis-darvil-bianchet-apartamento-casa-venda-floripa.jpg",
  brokerHero: "https://colchoesnippon.com/wp-content/uploads/2025/11/darvil-bianchet-corretor-imoveis-de-luxo-em-florianopolis-sul-da-ilha.jpg", 
  brokerAbout: "https://colchoesnippon.com/wp-content/uploads/2025/11/558092400_18527960554056463_4950913360348287322_n.jpg",
  lifestyle1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  lifestyle2: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  lifestyle3: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop",
};

export const FEATURED_LAUNCHES: LaunchProperty[] = [
  {
    id: '1',
    title: 'La Mare Campeche',
    neighborhood: 'Novo Campeche',
    locationHighlight: 'Pé na areia exclusivo',
    images: [
      'https://www.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_PISCINA_03.png',
      'https://www.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_PISCINA_01.png',
      'https://www.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_LOUNGE_EXTERNO.png',
      'https://www.cfl.com.br/app/uploads/2025/11/%C2%A9BLACKHAUS_CFL_CAM_PLAYGROUND.png'
    ],
    shortDescription: 'O novo ícone de luxo no m² mais valorizado do Sul da Ilha.',
    fullStory: 'Feito para quem busca viver o essencial: o nascer do sol, o vento do leste, o mar sempre à vista e uma rotina guiada pelo bem-estar.',
    features: ['2 a 4 vagas', '2 a 5 suítes', '108 a 362m²', 'Pré-Lançamentos'],
    videoUrl: 'https://www.youtube.com/watch?v=cy_JjOnCmAU'
  },
  {
    id: '2',
    title: 'Natus Residence',
    neighborhood: 'Canasvieiras',
    locationHighlight: 'Praias de Mar Calmo',
    images: [
      'https://d335luupugsy2.cloudfront.net/cms/files/731102/1762446423/$0uk5ht4plxln',
      'https://arcanjoandrade.com.br/storage/2025/12/natus-residence-ponta das-canas-florianopolis-apartamento-3.jpg',
      'https://gralha2.inforcedata.com.br/api/image/76455603.jpg',
      'https://gralha2.inforcedata.com.br/api/image/76455770.jpg'
    ],
    shortDescription: 'O pôr do sol mais exclusivo de Florianópolis.',
    fullStory: 'O Natus Residence é um refúgio de paz no Norte da Ilha. Com um design que integra a vegetação nativa à arquitetura moderna, oferece um píer privativo para embarcações e um pôr do sol cinematográfico todos os dias.',
    features: ['Píer Privativo', 'Design Biofílico', 'Beach Club Próprio', 'Segurança Inteligente 24h'],
    videoUrl: 'https://youtu.be/iIfFyWj4ZWQ'
  },
  {
    id: '3',
    title: 'MAKAI Beachfront',
    neighborhood: 'Nova Campeche',
    locationHighlight: 'De Viver o Verdadeiro Lifestyle',
    images: [
      'https://makainovocampeche.com.br/wp-content/uploads/2024/07/1-CAPA.jpg',
      'https://makainovocampeche.com.br/wp-content/uploads/2024/07/2-1.jpg',
      'https://makainovocampeche.com.br/wp-content/uploads/2024/07/3-1.jpg',
      'https://makainovocampeche.com.br/wp-content/uploads/2024/07/5-1.jpg'
    ],
    shortDescription: 'A experiência de vida que combina o conforto de um lar com as comodidades de um resort.',
    fullStory: 'Um lugar que concentra espaços de lazer e convivência ao ar livre, em contato com a natureza. A praça, com acesso à praia, é um ponto de encontro da comunidade com a diversão.',
    features: ['Condomínio Fechado de Luxo', 'Spa Privativo por Unidade', 'Energia Solar Sustentável', 'Localização Privilegiada'],
    videoUrl: 'https://www.youtube.com/watch?v=bbudbCgDLU0'
  }
];