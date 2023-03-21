import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ControllService {
  handlerMessage = '';
  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  navigate(nav: string) {
    this.router.navigateByUrl(nav);
  };

  navigateLogin() {
    this.router.navigate(['/login']);
  };

  navigateHome() {
    this.router.navigate(['/home']);
  };

  toastBottom(type: string, summary: string, detail: string): void {
    this.messageService.add({
      severity: type,
      summary,
      detail,
      life: 6000
    });
  };

}
