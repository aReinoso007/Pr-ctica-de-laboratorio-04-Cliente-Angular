import { Component, OnInit, Input } from '@angular/core';
import { WsJeeService } from '../../service/ws-jee.service';
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() dataUser = {
    correo:'', contrasena:''
  }

  constructor(
    public servicio: WsJeeService,
    public router: Router
  ) { }

  ngOnInit(): void {
    console.log('listando usuarios')
    this.servicio.getClients();
    console.log('listando usuarios: ', this.servicio.getClients().subscribe((data: {}) => {
      let datas: Data
      console.log('datos recuperados: ', datas)
    }))
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
