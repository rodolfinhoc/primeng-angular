import { Component } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.scss']
})
export class MapasComponent {
  images: any[] = [];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  carouselIndex = 0;
  slideWidth!: number;

  constructor(
    private http: HttpService
    ) { }

  async ngOnInit() {
    await this.loadMapas();
  };

  async loadMapas(){
    await this.http.get(`maps`).then((response: any) => {
      console.log(response.data);
      this.images = response.data;
      // this.loading = false;
    });
  };
}
