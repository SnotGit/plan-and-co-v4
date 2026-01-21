import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-card',
  imports: [],
  templateUrl: './cta-card.html',
  styleUrl: './cta-card.scss'
})
export class CtaCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('Plan & Co');
  description = signal('Notre expertise des contenus numériques au service de votre visibilité.');
  buttonText = signal('Contactez-nous');

  //======= METHODS =======
  
  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}