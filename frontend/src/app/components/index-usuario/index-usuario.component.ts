import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsJeeService } from '../../service/ws-jee.service';
import { Usuario } from 'src/app/models/models.usuario';

@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements OnInit {

  public usuario: Usuario;
  public cedulaUsuario: string;
  constructor(private route: ActivatedRoute, private service: WsJeeService) {
    this.cedulaUsuario = route.snapshot.params.cedula;
    this.getUsuario();

   }

  ngOnInit() {
    this.getUsuario();

  }

  getUsuario() {
    this.service.getUsuario(this.cedulaUsuario).subscribe((data: any) => {
      this.usuario = data;
      console.log('datos retornados ' + this.usuario.nombre, this.usuario.apellido);
    })
  }

}
