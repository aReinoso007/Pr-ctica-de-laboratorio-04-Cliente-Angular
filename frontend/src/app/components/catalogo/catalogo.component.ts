import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/models.producto';
import { WsJeeService } from '../../service/ws-jee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public productoList: Producto[];

  public prodList: any = [];

  constructor(
    private service: WsJeeService,
    private route: Router
  ) { }

  ngOnInit() {
    
  }

  getProductos() {
    return this.service.getProductos().subscribe((data: {}) => {
      this.prodList = data;
      console.log(this.prodList)
    })
  }


}
