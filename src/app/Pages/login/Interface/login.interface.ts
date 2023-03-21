import { Validators } from '@angular/forms';

export interface ResultLoginInterface {
  message: string;
  success: boolean;
  data: LoginInterface;
  errors: any[];
}

export interface LoginInterface {
  usuario: string;
  token: string;
  expireValue: number;
  expireToken: string;
}


export class FormLoginInterface {
  public usuario = ['', [Validators.required]];
  public senha = ['', [Validators.required]];
}
