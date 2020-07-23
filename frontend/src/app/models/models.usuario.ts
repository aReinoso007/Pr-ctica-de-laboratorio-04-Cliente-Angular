export class Usuario{
    constructor(
        public cedula?: string,
        public nombre?: string,
        public apellido?: string,
        public direccion?: string,
        public correo?: string,
        public contrasena?: string,
        public estado?: string
    ) { }
}