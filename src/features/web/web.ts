import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-web',
  imports: [RouterLink],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web implements AfterViewInit, OnDestroy {

  //======= INJECTIONS =======

  private readonly router = inject(Router);

  //======= SIGNALS =======

  activeSection = signal<string>('solution');

  //======= VIEW CHILD =======

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  //======= OBSERVER =======

  private observer: IntersectionObserver | null = null;

  //======= LIFECYCLE =======

  ngAfterViewInit(): void {
    this.setupScrollDetection();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  //======= METHODS =======

  goBack(): void {
    this.router.navigate(['/']);
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    const container = this.scrollContainer.nativeElement;
    
    if (section && container) {
      const offsetTop = section.offsetTop;
      container.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

  private setupScrollDetection(): void {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    const sections = this.scrollContainer.nativeElement.querySelectorAll('.section');
    sections.forEach((section) => {
      this.observer!.observe(section);
    });
  }
}