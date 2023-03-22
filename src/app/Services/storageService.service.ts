import { Injectable } from '@angular/core';

import { LoginInterface } from './../Pages/login/Interface/login.interface';
import { ControllService } from './controller.service';

//LOGIN
const USER = 'session';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage;


  constructor(private controller: ControllService) {
    this.storage = window.localStorage;
  };

  async setUser(user: any){
    return this.storage.setItem(USER, user);
    // return this.storage.setItem(USER, JSON.stringify(user));
  };

  async getUser(key: string) {
    return this.storage.getItem(key);
  };

  async getToken(): Promise<LoginInterface> {
    const item = this.storage.getItem(USER);
    if (item !== null) {
      return JSON.parse(item);
    } else {
      throw new Error('Item not found');
    }
  };

  logout() {
    this.storage.removeItem(USER);
    this.controller.navigateLogin();
  };
};
