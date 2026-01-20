import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy-card',
  imports: [],
  templateUrl: './strategy-card.html',
  styleUrl: './strategy-card.scss'
})
export class StrategyCard {

  constructor(private router: Router) {}

  navigateToStrategy(): void {
    this.router.navigate(['/strategy']);
  }
}