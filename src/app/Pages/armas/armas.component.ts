import { Component } from '@angular/core';

import { HttpService } from './../../Services/http.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent {
  armasPesadas: any[] = [];
  armasLeves: any[] = [];
  fuzisAssalto: any[] = [];
  fuzisPrecisao: any[] = [];
  escopetas: any[] = [];
  submetralhadoras: any[] = [];
  confronto: any[] = [];
  loading = true;

  responsiveOptions;

  constructor(
    private http: HttpService
    ) {
      this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }


  async ngOnInit() {
    await this.loadArmas();
  };

  async loadArmas(){
    await this.http.get(`weapons`).then(response => {
      console.log(response.data);
      this.loading = false;
      this.armasPesadas = response.data.filter((arma: any) => arma.shopData?.categoryText === "Armas Pesadas");
      this.armasLeves = response.data.filter((arma: any) => arma.shopData?.categoryText === "Armas Leves");
      this.fuzisAssalto = response.data.filter((arma: any) => arma.shopData?.categoryText === "Fuzis de Assalto");
      this.fuzisPrecisao = response.data.filter((arma: any) => arma.shopData?.categoryText === "Fuzis de Precisão");
      this.escopetas = response.data.filter((arma: any) => arma.shopData?.categoryText === "Escopetas");
      this.submetralhadoras = response.data.filter((arma: any) => arma.shopData?.categoryText === "Submetralhadoras");
      this.confronto = response.data.filter((arma: any) => arma.shopData === null);
    });
  };
}
