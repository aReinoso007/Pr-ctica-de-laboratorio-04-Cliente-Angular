import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { WsJeeService } from '../../service/ws-jee.service';
import { Router, Data } from '@angular/router';
import { Usuario } from 'src/app/models/models.usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  @Input() dataUser = {
    correo: '', contrasena: '', cedula:''
  };
  id: number;
  user: Usuario;
  public usuarios: any = [];
  cedula: string = '';

  constructor(
    public servicio: WsJeeService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    return this.servicio.getClientes().subscribe((response: any) => {
      this.usuarios = response;
      console.log(response);
    }, (error) => {
        console.error(error)
    })
  }

  login() {

    this.servicio.postLogin(this.dataUser).subscribe((data: {}) => {
      console.log("inicio exitoso")
      let d: Data;
      console.log("datos recuperados: ", data)
      this.router.navigate(['/catalogo'])
    });
    
  }



}
