export class Cliente {
    constructor(
        public cedula: string,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public correo: string,
        public fechaNacimiento: string,
        public activo: boolean,
        public direccion: {
            ciudad: string,
            callePrincipal: string,
            calleSecundaria: string
        },
        public membresia: {
            idMembresia: number
        }
    ) {}
}