import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { SeoCard } from './seo-card/seo-card';
import { WebCard } from './web-card/web-card';
import { CopywritingCard } from './copywriting-card/copywriting-card';
import { StrategyCard } from './strategy-card/strategy-card';
import { BlogCard } from './blog-card/blog-card';
import { CtaCard } from './cta-card/cta-card';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-carousel',
  imports: [
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
export class Carousel implements OnInit, OnDestroy {

  //======= INJECTIONS =======
  
  private readonly carouselService = inject(CarouselService);

  //======= PROPERTIES =======
  
  readonly totalCards = 6;

  //======= LIFECYCLE =======
  
  ngOnInit(): void {
    this.carouselService.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.carouselService.destroy();
  }

  //======= COMPUTED =======
  
  get currentIndex() {
    return this.carouselService.currentIndex;
  }

  get dots(): number[] {
    return Array.from({ length: this.totalCards }, (_, i) => i);
  }

  //======= METHODS =======
  
  prev(): void {
    this.carouselService.prev();
  }

  next(): void {
    this.carouselService.next();
  }

  goToSlide(index: number): void {
    this.carouselService.goToSlide(index);
  }
}