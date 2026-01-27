import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StoryBoxService } from './story-box.service';

@Component({
  selector: 'app-web',
  imports: [CommonModule],
  templateUrl: './web.html',
  styleUrl: './web.scss'
})
export class Web implements AfterViewInit, OnDestroy {

  //======= INJECTIONS =======

  private readonly router = inject(Router);
  readonly storyBoxService = inject(StoryBoxService);

  //======= SIGNALS =======

  activeSection = signal<string>('stack');

  //======= VIEW CHILD =======

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('storyBox') storyBox!: ElementRef<HTMLDivElement>;

  //======= OBSERVER =======

  private observer: IntersectionObserver | null = null;

  //======= LIFECYCLE =======

  ngAfterViewInit(): void {
    this.setupScrollDetection();
    this.storyBoxService.scrollCallback = () => this.scrollStoryBoxToBottom();
    this.storyBoxService.startAnimation();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
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

  private scrollStoryBoxToBottom(): void {
    setTimeout(() => {
      if (this.storyBox?.nativeElement) {
        this.storyBox.nativeElement.scrollTop = this.storyBox.nativeElement.scrollHeight;
      }
    }, 50);
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