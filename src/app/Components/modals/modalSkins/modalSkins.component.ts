import { HttpService } from './../../../Services/http.service';
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-skins',
  templateUrl: './modalSkins.component.html',
  styleUrls: ['./modalSkins.component.scss']
})
export class ModalSkinsComponent {
  loading = true;
  skins: any[] = [];

  constructor(
    private http: HttpService,
    public config: DynamicDialogConfig
    ) {}

  async ngOnInit() {
    await this.loadSkins();
  };

  async loadSkins() {
    await this.http.get(`weapons/${this.config.data.uuid}`).then((response: any) => {
      this.loading = false;
      console.log(response.data.skins);
      this.skins = response.data.skins;
    });
  };
}
