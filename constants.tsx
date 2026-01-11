import { ServiceCategory } from './types';
import { MapPin, Smartphone, Camera, BarChart3, Palette, Link } from 'lucide-react';

export const GOOGLE_COLORS = {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC05',
  green: '#34A853',
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'physical',
    title: 'Conectividade Imediata',
    subtitle: 'Placas Inteligentes & NFC',
    description: 'Facilite a avaliação e o contato dos seus clientes com tecnologia de aproximação.',
    icon: Smartphone,
    colorTheme: 'blue',
    items: [
      { name: 'Placa Google Meu Negócio (QR Code)', price: 'R$ 40,00' },
      { name: 'Placa Google (QR Code) Display em L', price: 'R$ 40,00', detail: '9x15cm' },
      { name: 'Placa Google (QR Code + NFC) Display em L', price: 'R$ 70,00', detail: '9x15cm', highlight: true },
      { name: 'Placa Personalizada + Redes Sociais + NFC', price: 'R$ 120,00', detail: 'Display em L 9x15cm, Design Exclusivo' },
      { name: 'Cartão de Visita NFC', price: 'R$ 60,00', detail: 'Tecnologia de aproximação' },
    ],
  },
  {
    id: 'presence',
    title: 'Fundação Digital',
    subtitle: 'Google Meu Negócio & Links',
    description: 'Garanta que sua empresa seja encontrada e escolhida no maior buscador do mundo.',
    icon: MapPin,
    colorTheme: 'red',
    items: [
      { name: 'Criação de Google Meu Negócio', price: 'R$ 700,00', detail: 'Perfil + Otimização Inicial + SEO Local', highlight: true },
      { name: 'Encurtador de Link (Beacons)', price: 'R$ 100,00', detail: 'Link inteligente para bio' },
      { name: 'Otimização GMN (Taxa Única)', price: 'R$ 600,00', detail: 'Otimização + SEO Local' },
      { name: 'Otimização GMN Avançada', price: 'R$ 1.000,00', detail: 'Otimização + Fotos + Texto + Estratégia' },
    ],
  },
  {
    id: 'visual',
    title: 'Imagens que Vendem',
    subtitle: 'Fotografia & Tour 360°',
    description: 'Transmita credibilidade e profissionalismo com imagens de alta qualidade.',
    icon: Camera,
    colorTheme: 'yellow',
    items: [
      { name: 'Ensaio Rápido', price: 'R$ 150,00', detail: 'Até 5 fotos tratadas' },
      { name: 'Pacote Intermediário', price: 'R$ 500,00', detail: '20 fotos (Fachada, interior, ambiente)' },
      { name: 'Foto 360° Simples', price: 'R$ 70,00' },
      { name: 'Sessão 360° Completa', price: 'R$ 600,00', detail: 'Tour virtual completo do estabelecimento', highlight: true },
      { name: 'Fotos + Vídeo Curto', price: 'R$ 450,00', detail: '10 fotos + 1 vídeo institucional' },
      { name: 'Fotos + Reels/Shorts', price: 'R$ 750,00', detail: '15 fotos + 3 vídeos verticais' },
    ],
  },
  {
    id: 'social',
    title: 'Crescimento Contínuo',
    subtitle: 'Gestão de Redes Sociais',
    description: 'Mantenha sua audiência engajada e conquiste novos clientes todos os dias.',
    icon: BarChart3,
    colorTheme: 'green',
    items: [
      { name: 'Pacote Start', price: 'R$ 450,00/mês', detail: '2 posts/semana' },
      { name: 'Pacote Intermediário', price: 'R$ 800,00/mês', detail: '3 posts/semana + interação básica' },
      { name: 'Pacote Profissional', price: 'R$ 1.200,00/mês', detail: '5 posts/semana + Stories', highlight: true },
      { name: 'Pacote de Vídeos', price: 'R$ 800,00/mês', detail: '8 vídeos com roteiro e edição' },
    ],
  },
  {
    id: 'branding',
    title: 'Marca Inesquecível',
    subtitle: 'Identidade Visual',
    description: 'Uma marca forte começa com um design profissional e coerente.',
    icon: Palette,
    colorTheme: 'blue',
    items: [
      { name: 'Kit Básico', price: 'R$ 500,00', detail: 'Logo simples' },
      { name: 'Identidade Intermediária', price: 'R$ 900,00', detail: 'Logo + Paleta + Tipografia' },
      { name: 'Identidade Completa', price: 'R$ 1.500,00', detail: 'Manual de marca completo', highlight: true },
    ],
  },
];
