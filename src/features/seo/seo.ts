import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo',
  imports: [],
  templateUrl: './seo.html',
  styleUrl: './seo.scss'
})
export class Seo {

  private readonly router = inject(Router);

  goBack(): void {
    this.router.navigate(['/']);
  }
}