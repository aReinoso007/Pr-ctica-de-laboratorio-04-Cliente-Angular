import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/models.producto';
import { WsJeeService } from '../../service/ws-jee.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public productoList: Producto[];

  constructor(private productoService: WsJeeService) { }

  ngOnInit() {
    this.productoList
  }

}
