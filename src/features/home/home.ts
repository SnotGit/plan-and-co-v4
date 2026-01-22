import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Carousel } from '@features/carousel/carousel';
import { Footer } from '@features/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carousel, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  title = 'Nos Services';
}