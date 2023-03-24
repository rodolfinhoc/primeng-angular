import { Component } from '@angular/core';
import { ControllService } from 'src/app/Services/controller.service';
import { StorageService } from 'src/app/Services/storageService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  visibleSidebar = false;

  constructor(
    private service: StorageService,
    private controller: ControllService
    ) { }

    async logout() {
      this.service.logout();
    };

    async navigatePageArmas() {
      this.controller.navigate('/armas');
      this.visibleSidebar = false;
    };

    async navigatePageAgentes() {
      this.controller.navigate('/agentes');
      this.visibleSidebar = false;
    };

    async navigatePageMapas() {
      this.controller.navigate('/mapas');
      this.visibleSidebar = false;
    };

    async navigateHome(){
      this.controller.navigateHome();
      this.visibleSidebar = false;
    };
}
