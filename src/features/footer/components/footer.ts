import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  //======= INJECTIONS =======
  
  private readonly router = inject(Router);

  //======= SIGNALS =======
  
  currentYear = signal(new Date().getFullYear());
  companyName = signal('Plan & Co');
  isAdmin = signal(false);

  socialLinks = signal<SocialLink[]>([
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com'
    },
    {
      name: 'Facebook',
      icon: 'fab fa-facebook',
      url: 'https://facebook.com'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com'
    }
  ]);

  //======= METHODS =======
  
  goToAdmin(): void {
    this.router.navigate(['/admin']);
  }
}