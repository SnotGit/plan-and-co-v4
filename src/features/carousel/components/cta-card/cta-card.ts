import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TypingEffectService } from '../../services/typing-effect.service';

@Component({
  selector: 'app-cta-card',
  imports: [],
  templateUrl: './cta-card.html',
  styleUrl: './cta-card.scss'
})
export class CtaCard implements OnInit {

  private hasAnimated = false;
  showBaseline = signal<boolean>(false);

  constructor(
    private router: Router,
    public typingService: TypingEffectService
  ) {}

  ngOnInit(): void {
    if (!this.hasAnimated) {
      this.hasAnimated = true;
      this.typingService.title('Plan & Co');

      setTimeout(() => {
        this.showBaseline.set(true);
      }, 1500);
    }
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }
}