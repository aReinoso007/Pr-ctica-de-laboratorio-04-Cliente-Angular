import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsJeeService } from '../../service/ws-jee.service';
import { Usuario } from 'src/app/models/models.usuario';

@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements OnInit {

  public usuarioList: any = [];

  @Input() detalles = {
    nombre: '', apellido: '', direccion: '', correo: '', contrasena: '',
    estado:'', cedula:''
  }
  public usuario: Usuario;
  public cedulaUsuario: string;
  public correo: string;
  constructor(private route: ActivatedRoute, private service: WsJeeService) {
    this.cedulaUsuario = route.snapshot.params.cedula;
    this.getUsuario();

   }

  ngOnInit() {
    this.getUsuario();
    this.getclientes();

  }

  getUsuario() {
    this.service.getUsuario(this.cedulaUsuario).subscribe((data: any) => {
      this.usuario = data;
      console.log('datos retornados ' + this.usuario.nombre);
    })
  }

  editUsuario() {
    this.service.postEditarUsuario(this.detalles).subscribe((data: {})=>{
      this.usuario = data;
      console.log('usuario alterado', this.usuario);
    })
  }

  getclientes() {
    this.service.getClientes().subscribe((datas: {}) => {
      this.usuarioList = datas;
      console.log(this.usuarioList);

    })
  }

}
