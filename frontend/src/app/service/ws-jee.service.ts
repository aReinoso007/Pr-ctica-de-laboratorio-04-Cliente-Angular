import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/models.usuario';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  private crearUserURl = 'http://localhost:8080/Practica-4/rest/service2/usuarios';
  private loginURL = 'http://localhost:8080/Practica-4/rest/service2/inicio';

  constructor(private http: HttpClient) { 
    
  }
 
  public registrarCliente(usuario: Usuario) {
    const body = new HttpParams()
      .set('nombre', usuario.nombre)
      .set('apellido', usuario.apellido)
      .set('cedula', usuario.cedula)
      .set('direccion', usuario.direccion)
      .set('correo', usuario.correo)
      .set('contrasena', usuario.contrasena)
    
    return this.http.post(
      
      this.crearUserURl,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      });
    
    
  }

  public postLogin(usuario: Usuario) {
    const body = new HttpParams()
    .set('correo',usuario.correo)
    .set('contrasena',usuario.contrasena);

    return this.http.post(
      this.loginURL,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }

   /*
  getClients() {
    return this.http.get("http://localhost:8080/Practica-4/rest/service2/listadousuarios");
  }

  getLogin() {
    return this.http.get("http://localhost:8080/Practica-4/rest/service2/inicio");
  }

  getClientes() {
    return this.http.get("http://localhost:8080/Practica-4/rest/service2/listadousuarios");
  }
  */

}
