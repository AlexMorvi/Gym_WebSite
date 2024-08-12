export class Membresia {
    constructor(
        public tipoMembresia: string,
        public precio: number,
        public fechaCreacion: string,
        public fechaExpiracion: string,
        public estadoMembresia: boolean
    ) {}
}