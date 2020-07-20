import { Categoria } from './models.categoria';
export class Producto{
    constructor(
        public fechaCompra?: string,
        public marca?: string,
        public nombre?: string,
        public precioCompra?: number,
        public precioVenta?: number,
        public stock?: number,
        public codigoCategoria?: Categoria
    ) { }
}