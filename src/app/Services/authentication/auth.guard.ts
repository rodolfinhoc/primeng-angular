import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ControllService } from './../controller.service';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private controller: ControllService
  ) {}

  canActivate(): boolean {
    console.log(this.authService.isLoggedIn());
    if (!this.authService.isLoggedIn()) {
      this.controller.navigateLogin();
      return false;
    }
    return true;
  }
}
