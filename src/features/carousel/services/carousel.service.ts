import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  
  //======= SIGNALS =======
  
  currentIndex = signal(0);
  totalCards = signal(6);
  
  //======= PROPERTIES =======
  
  private intervalId: any;
  private readonly autoRotateDelay = 5000; // 5 secondes

  //======= METHODS =======
  
  next(): void {
    const current = this.currentIndex();
    const total = this.totalCards();
    
    this.currentIndex.set((current + 1) % total);
  }

  prev(): void {
    this.next();
  }

  goToSlide(index: number): void {
    this.currentIndex.set(index);
    this.resetAutoRotate();
  }

  startAutoRotate(): void {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.autoRotateDelay);
  }

  resetAutoRotate(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.startAutoRotate();
  }

  destroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}