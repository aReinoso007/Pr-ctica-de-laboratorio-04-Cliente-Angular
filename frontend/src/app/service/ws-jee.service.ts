import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../models/models.usuario';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginObject } from '../models/models.loginobject';
import { Session } from '../models/models.session';

@Injectable({
  providedIn: 'root'
})
export class WsJeeService {

  private crearUserURl = 'http://localhost:8080/Practica-4/rest/Usuarios/post';
  private loginURL = 'http://localhost:8080/Practica-4/rest/service2/inicio';
  private activarCuenta = 'http://localhost:8080/Practica-4/rest/Usuarios/activar';
  private listarProductosURL = 'http://localhost:8080/Practica-4/rest/service2/productos/ ';
  private seleccionarUsuarioURL = 'http://localhost:8080/Practica-4/rest/Usuarios';
  private prodsPorCategoria = 'http://localhost:8080/Practica-4/rest/service2/productos';

  constructor(private http: HttpClient) { 
    
  }

  /**login(loginObj: LoginObject): Observable<Session> {
    return this.http.post()
  } */
 
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

  getClientes() {
    return this.http.get('http://localhost:8080/Practica-4/rest/Usuarios');
  }

  getProductos() {
    return this.http.get(this.listarProductosURL);
  }

  postActivacion(cedula: string, contrasena: string) {
    const body = new HttpParams()
      .set('cedula', cedula)
      .set('contrasena', contrasena)
    
    return this.http.post(
      this.activarCuenta,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }

  getUsuario(cedula: string) {
    return this.http.get(this.seleccionarUsuarioURL + '/' + cedula);
  }

  getPorCategorias(categoria: string) {
    return this.http.get(this.prodsPorCategoria + '/' + categoria);
  }

}
