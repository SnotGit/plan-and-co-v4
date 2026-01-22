import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copywriting-card',
  imports: [],
  templateUrl: './copywriting-card.html',
  styleUrl: './copywriting-card.scss'
})
export class CopywritingCard {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  title = signal('Copywriting');
  description = signal('Des textes qui convertissent et engagent votre audience.');
  buttonText = signal('Informations');

  //======= METHODS =======
  
  navigateToCopywriting(): void {
    this.router.navigate(['/copywriting']);
  }
}