import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../../models/Cliente.model';
import { NgClass, NgIf } from '@angular/common';
import { fechaCreacionMayorQueFechaExpiracion } from '../../../utils/ValidateDateMembresia';
import { MembresiaService } from '../../../../services/Membresia.service';

@Component({
  selector: 'app-asignar-membresia',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './asignar-membresia.component.html',
  styleUrl: './asignar-membresia.component.css',
})
export class AsignarMembresiaComponent {
  formulario!: FormGroup;
  successMessage: string = ''; // Propiedad para el mensaje de éxito
  errorMessage: string = ''; // Propiedad para el mensaje de error

  constructor(
    private formBuilder: FormBuilder,
    private _membresiaService: MembresiaService
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    const { required, pattern } = Validators;
    this.formulario = this.formBuilder.group({
      tipoMembresia: ['', required],
      precio: ['', [required, pattern(/^\d+(\.\d{1,2})?$/)]],
      fechaCreacion: ['', required],
      fechaExpiracion: ['', required],
      estadoMembresia: ['', required],
    }, {
      validators: fechaCreacionMayorQueFechaExpiracion(),
    });
  }

  showError(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  onSubmit() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      this._membresiaService
        .crearMembresia(formData) 
        .subscribe(
          (response) => {
            console.log('Datos enviados correctamente', response);
            this.successMessage = 'Datos enviados correctamente';
            this.errorMessage = ''; // Limpiar mensaje de error en caso de éxito
            this.formulario.reset();
            this.hideMessagesAfterTimeout();
          },
          (error) => {
            console.error('Error al enviar los datos', error);
            this.errorMessage = 'Error al enviar los datos. Por favor, inténtelo de nuevo.';
            this.successMessage = ''; // Limpiar mensaje de éxito en caso de error
            this.hideMessagesAfterTimeout();
          }
        );
    } else {
      console.error('El formulario no es válido');
      this.errorMessage = 'El formulario no es válido. Por favor, revise los campos.';
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