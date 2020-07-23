import { Component, OnInit } from '@angular/core';
import { WsJeeService } from '../../service/ws-jee.service';
import { Producto } from '../../models/models.producto';

@Component({
  selector: 'app-busca-categoria',
  templateUrl: './busca-categoria.component.html',
  styleUrls: ['./busca-categoria.component.css']
})
export class BuscaCategoriaComponent implements OnInit {

  public producto: any;
  nombreCategoria = '';
  constructor(private service: WsJeeService) { }

  ngOnInit(){
  }

  buscarPorCategorias() {
    this.service.getPorCategorias(this.nombreCategoria).subscribe((data: {}) => {
      this.producto = data;
      console.log('producto recuperado: ' + this.producto);
    })
  }

}
