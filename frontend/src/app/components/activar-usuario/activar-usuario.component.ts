import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WsJeeService } from '../../service/ws-jee.service';

@Component({
  selector: 'app-activar-usuario',
  templateUrl: './activar-usuario.component.html',
  styleUrls: ['./activar-usuario.component.css']
})
export class ActivarUsuarioComponent implements OnInit {

  @Input() detalles = {
    cedula: '', contrasena:''
  }
  constructor(
    public servicio: WsJeeService,
    public router: Router
  ) { }

  ngOnInit(){
  }

  activarCuenta() {
    this.servicio.postActivacion(this.detalles.cedula, this.detalles.contrasena).subscribe((data: any) => {
      this.router.navigate(['/catalogo'])
      console.log('usuario activado')
    })
  }

}
