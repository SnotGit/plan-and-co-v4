import { Component, signal } from '@angular/core';

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

  currentYear = signal(new Date().getFullYear());
  companyName = signal('Plan & Co');

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
}