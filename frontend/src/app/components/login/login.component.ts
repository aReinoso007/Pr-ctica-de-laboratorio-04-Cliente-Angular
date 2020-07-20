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
