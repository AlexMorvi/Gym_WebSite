export function formatContent(column: string, contenido: any): any {
    // si es dirección debe unir todo el objeto y separar por coma y espacio
    if (column === 'direccion' && contenido) {
        return `${contenido.ciudad}, ${contenido.callePrincipal}`;
    }
    // si es entrenamiento debe recorrer todo el array de objetos y de cada uno obtener el .nombre
    if (column === 'entrenamientos' && Array.isArray(contenido)) {
        return contenido.map((entrenamiento: any) => entrenamiento.nombre).join(', ');
    }
    // si contiene la palabra fecha debe convertir la fecha a un formato más legible: dd/mm/yyyy
    if (column.includes('fecha') && contenido) {
        const date = new Date(contenido);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    // si es membresia debe obtener el tipoMembresia
    if (column === 'membresia' && contenido) {
        return contenido.tipoMembresia;
    }
    // si es estado de membresia true=Activa, false=Inactiva
    if (column === 'estadoMembresia') {
        return contenido ? 'Activa' : 'Inactiva';
    }
    // si es entrenador debe darme el nombre completo
    if (column === 'entrenador' && contenido) {
        return `${contenido.nombre} ${contenido.apellido}`;
    }
    return contenido;
}