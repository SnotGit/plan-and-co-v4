import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo-card',
  imports: [],
  templateUrl: './seo-card.html',
  styleUrl: './seo-card.scss'
})
export class SeoCard {

  title = signal('SEO Rédaction');
  description = signal('Contenu optimisé pour les moteurs de recherche.');
  buttonText = signal('Informations');

  constructor(private router: Router) {}

  navigateToSeo(): void {
    this.router.navigate(['/seo']);
  }
}