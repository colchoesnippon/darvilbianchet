import { NavItem, LaunchProperty } from './types';

export const BROKER_NAME = "DARVIL BIANCHET";
export const BROKER_CRECI = "58927";
export const BROKER_PHONE = "5548999278420"; // Format for WhatsApp API
export const WHATSAPP_LINK_BASE = `https://wa.me/${BROKER_PHONE}`;

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Lançamentos', href: '#launches' },
  { label: 'Processo', href: '#process' },
  { label: 'Match', href: '#quiz' },
  { label: 'Sobre', href: '#about' },
  { label: 'Lifestyle', href: '#gallery' },
];

export const PLACEHOLDER_IMAGES = {
  hero: "https://colchoesnippon.com/wp-content/uploads/2025/11/sul-da-ilha-corretor-imoveis-darvil-bianchet-apartamento-casa-venda-floripa.jpg", // Modern dark luxury house
  // Foto principal da Hero (Dobra inicial)
  brokerHero: "https://colchoesnippon.com/wp-content/uploads/2025/11/darvil-bianchet-corretor-imoveis-de-luxo-em-florianopolis-sul-da-ilha.jpg", 
  // Foto secundária para a seção Sobre
  brokerAbout: "https://colchoesnippon.com/wp-content/uploads/2025/11/558092400_18527960554056463_4950913360348287322_n.jpg", // Professional placeholder used until second photo is provided
  lifestyle1: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", // Modern Interior
  lifestyle2: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", // Luxury Pool
  lifestyle3: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop", // Elegant Living Room
};

export const FEATURED_LAUNCHES: LaunchProperty[] = [
  {
    id: '1',
    title: 'Reserva do Mar',
    neighborhood: 'Novo Campeche',
    locationHighlight: 'Pé na areia exclusivo',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Sofisticação absoluta a poucos passos do oceano.',
    fullDescription: 'Um projeto arquitetônico premiado que une o minimalismo tropical com o luxo contemporâneo. Coberturas duplex com piscina privativa e vista eterna para a Ilha do Campeche.',
    features: ['Vista Mar Definitiva', '3 a 4 Suítes', 'Acabamento em Mármore', 'Automação Full']
  },
  {
    id: '2',
    title: 'Natus Residence',
    neighborhood: 'Ponta Das Canas',
    locationHighlight: 'Florianópolis ',
    images: [
      'https://colchoesnippon.com/wp-content/uploads/2025/11/natus-residence-corretor-imoveis-darvil-bianchet-apartamento-casa-venda-floripa.jpg',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'O pôr do sol mais valorizado de Florianópolis.',
    fullDescription: 'Com projeto da CBA Empreendimentos, este lançamento oferece uma infraestrutura completa, incluindo piscina coletiva, piscina infantil, salão de festas, sala de fitness, churrasqueira e brinquedoteca. ',
    features: ['Píer Privativo', 'Adega Climatizada', 'Design Biofílico', 'Segurança 24h']
  },
  {
    id: '3',
    title: 'Stone House Concept',
    neighborhood: 'Campeche Central',
    locationHighlight: 'Próximo à Pequeno Príncipe',
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop'
    ],
    shortDescription: 'Modernidade e natureza em perfeita harmonia.',
    fullDescription: 'Casas de alto padrão em condomínio fechado. Conceito aberto, integração total com a natureza preservada do terreno e acabamentos em pedra natural e madeira nobre.',
    features: ['Condomínio Fechado', 'Piscina Raia 25m', 'Spa Privativo', 'Energia Fotovoltaica']
  }
];