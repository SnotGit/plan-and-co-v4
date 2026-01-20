import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  //============ SIGNALS ============

  private _currentIndex = signal<number>(0);
  private _totalCards = signal<number>(6);
  private _autoRotateEnabled = signal<boolean>(true);
  private _rotateInterval = signal<number>(5000);

  //============ READONLY ============

  readonly currentIndex = this._currentIndex.asReadonly();
  readonly totalCards = this._totalCards.asReadonly();
  readonly autoRotateEnabled = this._autoRotateEnabled.asReadonly();

  //============ STATE ============

  private intervalId: number | undefined;

  //============ METHODS ============

  next(): void {
    const nextIndex = (this._currentIndex() + 1) % this._totalCards();
    this._currentIndex.set(nextIndex);
  }

  prev(): void {
    const prevIndex = this._currentIndex() === 0 
      ? this._totalCards() - 1 
      : this._currentIndex() - 1;
    this._currentIndex.set(prevIndex);
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this._totalCards()) {
      this._currentIndex.set(index);
    }
  }

  startAutoRotate(): void {
    this.stopAutoRotate();
    
    if (this._autoRotateEnabled()) {
      this.intervalId = window.setInterval(() => {
        this.next();
      }, this._rotateInterval());
    }
  }

  stopAutoRotate(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  toggleAutoRotate(): void {
    this._autoRotateEnabled.set(!this._autoRotateEnabled());
    
    if (this._autoRotateEnabled()) {
      this.startAutoRotate();
    } else {
      this.stopAutoRotate();
    }
  }

  setRotateInterval(milliseconds: number): void {
    this._rotateInterval.set(milliseconds);
    
    if (this._autoRotateEnabled()) {
      this.startAutoRotate();
    }
  }

  //============ CLEANUP ============

  destroy(): void {
    this.stopAutoRotate();
  }
}