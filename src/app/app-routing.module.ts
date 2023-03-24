import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgentesComponent } from './Pages/agentes/agentes.component';
import { ArmasComponent } from './Pages/armas/armas.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { MapasComponent } from './Pages/mapas/mapas.component';
import { AuthGuard } from './Services/authentication/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'armas', component: ArmasComponent, canActivate: [AuthGuard] },
  { path: 'agentes', component: AgentesComponent, canActivate: [AuthGuard] },
  { path: 'mapas', component: MapasComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
