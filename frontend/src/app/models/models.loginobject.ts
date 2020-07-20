export class LoginObject {
    public correo: string;
    public contrasena: string;

    constructor(object: any) {
        this.correo = (object.correo) ? object.correo : null;
        this.contrasena = (object.contrasena) ? object.contrasena : null;
    }
}