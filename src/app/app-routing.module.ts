import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { PrivacidadeComponent } from './componentes/privacidade/privacidade.component';
import { TermosServicoComponent } from './componentes/termos-servico/termos-servico.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'quem-somos', component: QuemSomosComponent}, 
  { path: 'contato', component: ContatoComponent},
  { path: 'politica-privacidade', component: PrivacidadeComponent},
  { path: 'termos-servico', component: TermosServicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
