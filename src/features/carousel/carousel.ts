import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SeoCard } from './cards/seo-card/seo-card';
import { WebCard } from './cards/web-card/web-card';
import { CopywritingCard } from './cards/copywriting-card/copywriting-card';
import { StrategyCard } from './cards/strategy-card/strategy-card';
import { BlogCard } from './cards/blog-card/blog-card';
import { CtaCard } from './cards/cta-card/cta-card';

@Component({
  selector: 'app-carousel',
  imports: [
    CarouselModule,
    SeoCard,
    WebCard,
    CopywritingCard,
    StrategyCard,
    BlogCard,
    CtaCard
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel {
  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 9000,
    autoplayHoverPause: false,
    smartSpeed: 2000,
    items: 1,
    responsive: {
      0: {
        items: 1
      }
    }
  };
}
