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
  
  title = signal('Création De Sites Web');
  description = signal('Sites vitrines élégants et performants.');
  buttonText = signal('Informations');

  //======= METHODS =======
  
  navigateToWeb(): void {
    this.router.navigate(['/web']);
  }
}