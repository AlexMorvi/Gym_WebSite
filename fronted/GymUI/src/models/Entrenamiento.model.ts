interface Entrenador {
    cedula: string;
}

export class Entrenamiento {
    constructor(
        public nombre: string,
        public descripcion: string,
        public duracion: number,
        public entrenador: Entrenador
    ) {}
}