import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Article {
  id: number;
  title: string;
  slug: string;
}

@Component({
  selector: 'app-blog-card',
  imports: [],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss'
})
export class BlogCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('Articles & Conseils');
  buttonText = signal('Voir tous nos articles');
  
  latestArticles = signal<Article[]>([
    { id: 1, title: 'SEO 2026 : Qui dicte les règles ?', slug: 'seo-2025' },
    { id: 2, title: 'Angular pour les nuls', slug: 'Angular 2026' }
  ]);

  //======= METHODS =======
  
  navigateToBlog(): void {
    this.router.navigate(['/blog']);
  }

  navigateToArticle(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }
}