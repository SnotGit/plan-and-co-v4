import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SeoCard } from './seo-card/seo-card';
import { WebCard } from './web-card/web-card';
import { CopywritingCard } from './copywriting-card/copywriting-card';
import { StrategyCard } from './strategy-card/strategy-card';
import { BlogCard } from './blog-card/blog-card';
import { CtaCard } from './cta-card/cta-card';

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
