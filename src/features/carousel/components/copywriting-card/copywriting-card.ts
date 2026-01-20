import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copywriting-card',
  imports: [],
  templateUrl: './copywriting-card.html',
  styleUrl: './copywriting-card.scss'
})
export class CopywritingCard {

  constructor(private router: Router) {}

  navigateToCopywriting(): void {
    this.router.navigate(['/copywriting']);
  }
}