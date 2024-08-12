export interface TableStructure {
    type: string;
    columns: Array<string>;
}

export const TABLE_STRUCTURE: TableStructure[] = [
    {
        type: 'clientes',
        columns: ['cedula', 'nombre', 'apellido', 'direccion', 'telefono','correo', 'fechaNacimiento', 'membresia', 'activo']
    }, {
        type: 'entrenadores',
        columns: ['cedula', 'nombre', 'apellido', 'direccion', 'entrenamientos','especialidad', 'fechaNacimiento']
    }, {
        type: 'membresias',
        columns: ['idMembresia', 'tipoMembresia','estadoMembresia', 'fechaCreacion', 'fechaExpiracion']
    }, {
        type: 'entrenamientos',
        columns: ['idEntrenamiento', 'nombre', 'entrenador', 'duracion', 'descripcion']
    }, {
        type: 'horarios',
        columns: ['id', 'dia', 'hora', 'entrenador']
    }
];