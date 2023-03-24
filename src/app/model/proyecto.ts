export class Proyecto {
    id?: number;
    nombrep: string;
    descripcionp: string;
    direccionp:string;

    constructor(nombrep: string,descripcionp: string, direccionp:string){
        this.nombrep = nombrep;
        this.descripcionp=descripcionp;
        this.direccionp = direccionp;
    }
}
