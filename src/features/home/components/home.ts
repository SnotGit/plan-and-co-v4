import { Component } from '@angular/core';
import { Header } from '@features/header/components/header';
import { Carousel } from '@features/carousel/components/carousel';
import { Footer } from '@features/footer/components/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Carousel,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}