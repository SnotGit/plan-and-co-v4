import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  imports: [],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web {

  private readonly router = inject(Router);

  goBack(): void {
    this.router.navigate(['/']);
  }
}