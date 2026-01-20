import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

interface Article {
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

  articles = signal<Article[]>([
    { title: 'Les secrets du copywriting efficace', slug: 'secrets-copywriting' },
    { title: 'SEO en 2025 : Les nouvelles règles', slug: 'seo-2025' },
    { title: 'Créer une stratégie de contenu gagnante', slug: 'strategie-contenu' }
  ]);

  constructor(private router: Router) {}

  navigateToBlog(): void {
    this.router.navigate(['/blog']);
  }

  navigateToArticle(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }
}