import { Component } from '@angular/core';
import { Carousel } from '@features/carousel/components/carousel';

@Component({
  selector: 'app-home-content',
  imports: [Carousel],
  templateUrl: './home-content.html',
  styleUrl: './home-content.scss'
})
export class HomeContent {}