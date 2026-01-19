import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copywriting',
  imports: [],
  templateUrl: './copywriting.html',
  styleUrl: './copywriting.scss'
})
export class Copywriting {

  private readonly router = inject(Router);

  goBack(): void {
    this.router.navigate(['/']);
  }
}