import { Component, OnInit, Input } from '@angular/core';
import { WsJeeService } from '../../service/ws-jee.service';
import { Usuario } from '../../models/models.usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  @Input() dataUser = {
    nombre: '', apellido: '', cedula: '',
    direccion:'', correo:'', contrasena:''
  }

  constructor(
    public servicio: WsJeeService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  registrar() {
    this.servicio.registrarCliente(this.dataUser).subscribe((data: {}) => {
      this.router.navigate(['/login'])
      console.log('usuario creado');
    })
  }

}
