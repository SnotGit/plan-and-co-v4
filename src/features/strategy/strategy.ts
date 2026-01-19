import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy',
  imports: [],
  templateUrl: './strategy.html',
  styleUrl: './strategy.scss'
})
export class Strategy {

  private readonly router = inject(Router);

  goBack(): void {
    this.router.navigate(['/']);
  }
}