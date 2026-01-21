import { Component } from '@angular/core';
import { HomeContent } from './home-content/home-content';
import { Footer } from '@features/footer/components/footer';

@Component({
  selector: 'app-home',
  imports: [
    HomeContent,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}