import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResultLoginInterface } from 'src/app/Pages/login/Interface/login.interface';

import { HttpService } from '../http.service';
import { ControllService } from './../controller.service';
import { StorageService } from './../storageService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;


  constructor(
    private http: HttpService,
    private service: StorageService,
    private controller: ControllService
    ) {
      this.isAuthenticated = true;
      // if (await this.service.getUser('session').then((res) => res) !== null) {
      //     this.isAuthenticated = true;
      // }
    }

  async login(loginForm: FormGroup) {
    this.controller.toastBottom('success','OK', 'Login Efetuado com Sucesso!');
    await this.service.setUser(loginForm);
    this.isAuthenticated = true;
    this.controller.navigateHome();
    // await this.http.post('login', loginForm.value).then(async (result: ResultLoginInterface) => {
    //   if (result.success) {
    //     this.controller.toastBottom('success','OK', result.message);
    //     await this.service.setUser(result.data);
    //     this.isAuthenticated = true;
    //     this.controller.navigateHome();
    //   }
    // }).catch(() => {
    //   this.controller.toastBottom('error','ERRO', 'Usuário ou senha incorretos!');
    //   this.isAuthenticated = false;
    // });
  }

  async logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
