import { Component } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.scss']
})
export class AgentesComponent {
  iniciadores: any[] = [];
  sentinelas: any[] = [];
  duelistas: any[] = [];
  controladores: any[] = [];
  loading = true;
  previewImage!: string;
  playerAudio!: string;

  constructor(
    private http: HttpService
    ) { }

  async ngOnInit() {
    await this.loadAgentes();
  };

  async loadAgentes(){
    await this.http.get(`agents`).then((response: any) => {
      this.loading = false;
      console.log(response.data);
      this.iniciadores = response.data.filter((agente: any) => agente.role?.displayName === "Iniciador");
      this.sentinelas = response.data.filter((agente: any) => agente.role?.displayName === "Sentinela");
      this.duelistas = response.data.filter((agente: any) => agente.role?.displayName === "Duelista");
      this.controladores = response.data.filter((agente: any) => agente.role?.displayName === "Controlador");
    });
  };

  async showPreview(fullPortrait: string, audio: string){
    this.playerAudio = audio;
    this.previewImage = fullPortrait;
    const audioPlay = new Audio(audio);
    audioPlay.play();
  };
}
