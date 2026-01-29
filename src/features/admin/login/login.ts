import { Component, inject, output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  //======= OUTPUTS =======

  googleLogin = output<void>();

  //======= METHODS =======

  onGoogleLogin(): void {
    this.googleLogin.emit();
  }
}