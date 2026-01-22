import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy-card',
  imports: [],
  templateUrl: './strategy-card.html',
  styleUrl: './strategy-card.scss'
})
export class StrategyCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('Stratégie de Contenu');
  description = signal('Planification éditoriale sur-mesure pour votre marque.');
  buttonText = signal('Informations');

  //======= METHODS =======
  
  navigateToStrategy(): void {
    this.router.navigate(['/strategy']);
  }
}