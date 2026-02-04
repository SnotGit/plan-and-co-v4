import { Component, inject, signal, ViewChild, ElementRef, afterNextRender, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StoryBoxService } from './story-box.service';

@Component({
  selector: 'app-web',
  imports: [CommonModule],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web implements OnDestroy {

  //======= INJECTIONS =======

  private readonly router = inject(Router);
  readonly storyBoxService = inject(StoryBoxService);

  //======= SIGNALS =======

  activeSection = signal<'stack' | 'solution' | 'avantages'>('stack');
  activeTextId = signal<string | null>(null);

  //======= VIEW CHILD =======

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  //======= OBSERVERS =======

  private sectionObserver: IntersectionObserver | null = null;
  private textObserver: IntersectionObserver | null = null;

  //======= RENDER =======

  private readonly renderRef = afterNextRender(() => {
    this.setupSectionDetection();
    this.setupTextDetection();
    this.storyBoxService.startAnimation();
  });

  //======= LIFECYCLE =======

  ngOnDestroy(): void {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
    if (this.textObserver) {
      this.textObserver.disconnect();
    }
    this.storyBoxService.destroy();
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

  private setupSectionDetection(): void {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id as 'stack' | 'solution' | 'avantages';
          this.activeSection.set(sectionId);
        }
      });
    }, options);

    const sections = this.scrollContainer.nativeElement.querySelectorAll('.section');
    sections.forEach((section) => {
      this.sectionObserver!.observe(section);
    });
  }

  private setupTextDetection(): void {
    const options = {
      root: this.scrollContainer.nativeElement,
      rootMargin: '-35% 0px -35% 0px',
      threshold: 0
    };

    this.textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textId = entry.target.getAttribute('data-text-id');
          if (textId) {
            this.activeTextId.set(textId);
          }
        }
      });
    }, options);

    const texts = this.scrollContainer.nativeElement.querySelectorAll('.text[data-text-id]');
    texts.forEach((text) => {
      this.textObserver!.observe(text);
    });
  }
}