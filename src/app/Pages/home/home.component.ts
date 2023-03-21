import { StorageService } from './../../Services/storageService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  visibleSidebar = false;

  constructor(private service: StorageService) { }

  async logout() {
    this.service.logout();
  };

}
