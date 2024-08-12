interface Direccion {
    ciudad: string;
    callePrincipal: string;
    calleSecundaria: string;
}

export class Entrenador {
    constructor(
        public cedula: string,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public correo: string,
        public fechaNacimiento: string,
        public activo: boolean,
        public direccion: Direccion,
        public especialidad: string
    ) {}
}