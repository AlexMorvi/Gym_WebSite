export function findSingleKeywordAndConvertToLowercase(input: string): string | null {
    const regex = /cliente|clientes|entrenador|entrenadores|membresia|membresias|horario|horarios|entrenamiento|entrenamientos/i;
    const match = input.match(regex);
    if (match) {
        const keyword = match[0].toLowerCase();
        switch (keyword) {
            case 'cliente':
                return 'clientes';
            case 'entrenador':
                return 'entrenadores';
            case 'membresia':
                return 'membresias';
            case 'horario':
                return 'horarios';
            case 'entrenamiento':
                return 'entrenamientos';
            default:
                return keyword; // If it's already plural, return as is
        }
    } else {
        return null;
    }
}