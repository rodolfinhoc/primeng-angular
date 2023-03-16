import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FormLoginInterface } from './Interface/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  //variáveis
  isLoggingIn = false;
  icon = '';

  constructor(
    fb: FormBuilder
    ) {
    this.loginForm = fb.group(new FormLoginInterface());
  }

  login() {
    this.isLoggingIn = true;
    this.icon = 'pi pi-spin pi-spinner';
    console.log(this.loginForm.value);
  }
}
