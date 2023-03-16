import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  async login() {
    // Lógica de login aqui
    this.isAuthenticated = true;
  }

  async logout() {
    // Lógica de logout aqui
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
