import { Injectable, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  
  private readonly router = inject(Router);
  
  activeSection = signal<string>('hero');
  
  private observer: IntersectionObserver | null = null;

  observe(sections: Element[]): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const sectionId = entry.target.getAttribute('id');
            if (sectionId) {
              this.activeSection.set(sectionId);
              this.router.navigate([], {
                fragment: sectionId,
                replaceUrl: true
              });
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}