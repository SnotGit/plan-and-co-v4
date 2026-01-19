import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPreviewCard } from './blog-preview-card/blog-preview-card';
import { CtaCard } from './cta-card/cta-card';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-service-content',
  imports: [
    RouterLink,
    BlogPreviewCard,
    CtaCard
  ],
  templateUrl: './service-content.html',
  styleUrl: './service-content.scss'
})
export class ServiceContent {

  services = signal<Service[]>([
    {
      id: 1,
      icon: '✍️',
      title: 'Copywriting',
      description: 'Des textes qui convertissent et engagent votre audience.',
      route: '/copywriting'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Stratégie de Contenu',
      description: 'Planification éditoriale sur-mesure pour votre marque.',
      route: '/strategy'
    },
    {
      id: 3,
      icon: '🔍',
      title: 'SEO Rédaction',
      description: 'Contenu optimisé pour les moteurs de recherche.',
      route: '/seo'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Création Sites Web',
      description: 'Sites vitrines élégants et performants.',
      route: '/web'
    }
  ]);
}