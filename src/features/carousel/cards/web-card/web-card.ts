import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-card',
  imports: [],
  templateUrl: './web-card.html',
  styleUrl: './web-card.scss'
})
export class WebCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('Web');
  description = signal('Création de sites élégants et performants.\n Hébergement et Maintenance.');
  buttonText = signal('Informations');

  //======= METHODS =======
  
  navigateToWeb(): void {
    this.router.navigate(['/web']);
  }
}