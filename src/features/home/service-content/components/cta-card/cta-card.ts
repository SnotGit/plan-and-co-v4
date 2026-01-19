import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-card',
  imports: [],
  templateUrl: './cta-card.html',
  styleUrl: './cta-card.scss'
})
export class CtaCard {

  private readonly router = inject(Router);

  title = signal('Prêt à booster votre communication ?');
  subtitle = signal('Discutons de votre projet ensemble');
  button = signal('Demander un devis');

  onCtaClick(): void {
    this.router.navigate(['/contact']);
  }
}