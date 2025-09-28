import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ContentComponent } from './componentes/content/content.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import { BuscaComponent } from './componentes/header/busca/busca.component';
import { NavlinksComponent } from './componentes/header/navlinks/navlinks.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { HomeComponent } from './componentes/home/home.component';
import { PrivacidadeComponent } from './componentes/privacidade/privacidade.component';
import { TermosServicoComponent } from './componentes/termos-servico/termos-servico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//TOOLBAR IMPORTS

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//BUTTON IMPORTS

import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LogoComponent,
    BuscaComponent,
    NavlinksComponent,
    QuemSomosComponent,
    ContatoComponent,
    HomeComponent,
    PrivacidadeComponent,
    TermosServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
