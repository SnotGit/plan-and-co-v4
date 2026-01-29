import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Login } from './login/login';

interface User {
  name: string;
  email: string;
  photoUrl: string;
}

@Component({
  selector: 'app-admin',
  imports: [RouterOutlet, Login],
  templateUrl: './admin.html',
  styleUrl: './admin.scss'
})
export class Admin {

  //======= INJECTIONS =======

  private readonly router = inject(Router);

  //======= SIGNALS =======

  isAuthenticated = signal<boolean>(false);

  unreadAlerts = signal<number>(0);
  
  user = signal<User>({
    name: '',
    email: '',
    photoUrl: ''
  });

  showUserMenu = signal<boolean>(false);

  //======= METHODS =======

  onGoogleLogin(): void {
    // TODO: Implémenter OAuth Google service
    console.log('Google login initiated');
    
    // Mock connexion pour test
    this.isAuthenticated.set(true);
    this.user.set({
      name: 'Snot',
      email: 'Snot@example.com',
      photoUrl: 'https://via.placeholder.com/40'
    });
  }

  toggleUserMenu(): void {
    this.showUserMenu.update(show => !show);
  }

  goToAlerts(): void {
    this.router.navigate(['/admin/notifications']);
  }

  goToSettings(): void {
    this.showUserMenu.set(false);
    this.router.navigate(['/admin/parametres']);
  }

  logout(): void {
    this.showUserMenu.set(false);
    this.isAuthenticated.set(false);
    this.user.set({ name: '', email: '', photoUrl: '' });
  }
}