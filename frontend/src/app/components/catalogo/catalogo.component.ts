import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/models.producto';
import { WsJeeService } from '../../service/ws-jee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  public cedula: string;

  public productoList: Producto[];

  public prodList: any = [];




  constructor(
    private service: WsJeeService,
    private route: ActivatedRoute
  ) { 
    this.cedula = route.snapshot.params.usuCedula;
    console.log(this.cedula);
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    return this.service.getProductos().subscribe((data: {}) => {
      this.prodList = data;
      console.log(this.prodList)
    })
  }

  

  
}
