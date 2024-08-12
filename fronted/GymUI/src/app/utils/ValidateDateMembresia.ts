import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fechaCreacionMayorQueFechaExpiracion(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaCreacion = control.get('fechaCreacion')?.value;
        const fechaExpiracion = control.get('fechaExpiracion')?.value;

        if (fechaCreacion && fechaExpiracion && new Date(fechaCreacion) > new Date(fechaExpiracion)) {
            return { fechaInvalida: true };
        }
        return null;
    };
}