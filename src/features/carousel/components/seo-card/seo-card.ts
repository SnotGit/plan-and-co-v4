import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo-card',
  imports: [],
  templateUrl: './seo-card.html',
  styleUrl: './seo-card.scss'
})
export class SeoCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('SEO');
  description = signal('Contenu optimisé pour les moteurs de recherche.');
  buttonText = signal('Informations');

  //======= METHODS =======
  
  navigateToSeo(): void {
    this.router.navigate(['/seo']);
  }
}