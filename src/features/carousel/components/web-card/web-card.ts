import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-card',
  imports: [],
  templateUrl: './web-card.html',
  styleUrl: './web-card.scss'
})
export class WebCard {

  constructor(private router: Router) {}

  navigateToWeb(): void {
    this.router.navigate(['/web']);
  }
}