import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { WsJeeService } from '../../service/ws-jee.service';
import { Router, Data } from '@angular/router';
import { Usuario } from 'src/app/models/models.usuario';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public dataSession: any = [];
  @Input() dataUser = {
    correo: '', contrasena: ''
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
      this.saveCedula(data);
    });
    
  }

  saveCedula(dat: any) {
    this.cedula = dat;
    return this.cedula;
  }
  ced: string = '';
  getCedula() {
    return this.ced = this.cedula;
  }

  @ViewChild(CatalogoComponent) hijo;
  ngAfterViewInit() {
    this.ced;
  }
  

}
