import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EntrenadorService } from '../../../../services/Entrenador.service';

@Component({
  selector: 'app-registrar-entrenador',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule, NgClass],
  templateUrl: './registrar-entrenador.component.html',
  styleUrl: './registrar-entrenador.component.css',
})
export class RegistrarEntrenadorComponent {
  formulario!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private _entrenadorService: EntrenadorService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    const { required, pattern, email } = Validators;
    this.formulario = this.formBuilder.group({
      cedula: [
        '',
        [
          required,
          Validators.minLength(10),
          Validators.maxLength(10),
          pattern(/^\d+$/),
        ],
      ],
      nombre: ['', required],
      apellido: ['', required],
      telefono: ['', [pattern('^[0-9]*$'), required]],
      correo: ['', [required, email]],
      fechaNacimiento: ['', required],
      activo: [true, required],
      direccion: ['', required],
      especialidad: ['', required],
    });
  }

  showError(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = {
        ...this.formulario.value,
        activo: true,
        direccion: {
          ciudad: this.formulario.value.direccion || '',
          callePrincipal: '',
          calleSecundaria: '',
        },
      };
      console.log(formData);
      
      this._entrenadorService.crearEntrenador(formData).subscribe(
        (response) => {
          console.log('Datos enviados correctamente', response);
          this.successMessage = 'Datos enviados correctamente';
          this.errorMessage = '';
          this.formulario.reset();
          this.hideMessagesAfterTimeout();
        },
        (error) => {
          this.errorMessage = 'Error al enviar los datos: ' + error.message;
          this.successMessage = '';
          this.hideMessagesAfterTimeout();
        }
      );
    } else {
      console.error('El formulario no es válido');
      this.errorMessage =
        'El formulario no es válido. Por favor, revise los campos.';
      this.successMessage = ''; // Limpiar mensaje de éxito en caso de error
      this.hideMessagesAfterTimeout();
    }
  }

  private hideMessagesAfterTimeout(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000); // Ocultar mensajes después de 3 segundos
  }
}
