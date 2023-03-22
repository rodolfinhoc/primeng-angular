import { HttpService } from './../../Services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent {
  armas: any[] = [];

  constructor(
    private http: HttpService
    ) { }


  async ngOnInit() {
    await this.loadArmas();
  };

  async loadArmas(){
    await this.http.get(`weapons`).then(response => {
      console.log(response.data);
      this.armas = response.data;
    });
  };
}
