import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { IndexUsuarioComponent } from './components/index-usuario/index-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';
import { ActivarUsuarioComponent } from './components/activar-usuario/activar-usuario.component';
import { AdmUsuarioComponent } from './components/adm-usuario/adm-usuario.component';
import { BuscaCategoriaComponent } from './components/busca-categoria/busca-categoria.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'indexUsuario', component: IndexUsuarioComponent },
  { path: 'login/:correo', component: LoginComponent },
  { path: 'registrar', component: RegistroComponent },
  { path: 'activar', component: ActivarUsuarioComponent },
  { path: 'categorias', component: BuscaCategoriaComponent},
  
  { path: '**', component: PageNotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
