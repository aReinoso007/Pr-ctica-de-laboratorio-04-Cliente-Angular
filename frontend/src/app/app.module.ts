import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { WsJeeService } from './service/ws-jee.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IndexUsuarioComponent } from './components/index-usuario/index-usuario.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import { ActivarUsuarioComponent } from './components/activar-usuario/activar-usuario.component';
import { AdmUsuarioComponent } from './components/adm-usuario/adm-usuario.component';
import { fromEventPattern } from 'rxjs';
import { BuscaCategoriaComponent } from './components/busca-categoria/busca-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    IndexUsuarioComponent,
    CatalogoComponent,
    RegistroComponent,
    PageNotFound404Component,
    ActivarUsuarioComponent,
    AdmUsuarioComponent,
    BuscaCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
