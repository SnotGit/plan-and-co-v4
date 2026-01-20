import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo-card',
  imports: [],
  templateUrl: './seo-card.html',
  styleUrl: './seo-card.scss'
})
export class SeoCard {

  constructor(private router: Router) {}

  navigateToSeo(): void {
    this.router.navigate(['/seo']);
  }
}