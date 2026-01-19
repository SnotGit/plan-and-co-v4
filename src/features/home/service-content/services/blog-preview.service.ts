import { Injectable } from '@angular/core';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
}

@Injectable({ 
  providedIn: 'root' 
})
export class BlogPreviewService {

  getLatestArticles(): Article[] {
    return [
      {
        id: '1',
        slug: 'copywriting-strategies-2025',
        title: '5 Stratégies de Copywriting pour 2025',
        excerpt: 'Découvrez les techniques qui feront la différence cette année.'
      },
      {
        id: '2',
        slug: 'seo-content-guide',
        title: 'Guide Complet du Contenu SEO',
        excerpt: 'Comment créer du contenu optimisé qui ranke sur Google.'
      },
      {
        id: '3',
        slug: 'storytelling-brand',
        title: 'Le Storytelling au Service de Votre Marque',
        excerpt: 'Créez une connexion émotionnelle avec votre audience.'
      }
    ];
  }
}