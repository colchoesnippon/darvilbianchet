export type QuizObjective = 'Comprar' | 'Vender' | 'Investir' | '';
export type PropertyType = 'Casa' | 'Cobertura' | 'Condomínio Fechado' | 'Terreno' | '';
export type PriceRange = 'R$ 1.5mi - R$ 3mi' | 'R$ 3mi - R$ 5mi' | 'Acima de R$ 5mi' | '';

export interface QuizState {
  step: number;
  objective: QuizObjective;
  propertyType: PropertyType; // Used if buying/investing
  location: string; // Used if selling
  budget: PriceRange;
  name: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface LaunchProperty {
  id: string;
  title: string;
  neighborhood: string;
  locationHighlight: string;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
}