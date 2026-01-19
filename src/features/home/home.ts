import { Component } from '@angular/core';
import { Header } from './header/components/header';
import { ServiceContent } from './service-content/components/service-content';
import { Footer } from './footer/components/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    ServiceContent,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}