import { Component } from '@angular/core';
import { Header } from '@features/header/components/header';
import { HomeContent } from './home-content/home-content';
import { Footer } from '@features/footer/components/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    HomeContent,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}