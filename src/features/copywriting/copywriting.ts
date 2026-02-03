import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-copywriting',
  imports: [RouterLink],
  templateUrl: './copywriting.html',
  styleUrl: './copywriting.scss'
})
export class Copywriting {

  //======= INJECTIONS =======

  private readonly router = inject(Router);

  //======= METHODS =======

  goBack(): void {
    this.router.navigate(['/']);
  }
}