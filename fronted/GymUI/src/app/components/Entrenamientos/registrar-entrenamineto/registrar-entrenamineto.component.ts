import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EntrenamientoService } from '../../../../services/Entrenamiento.service';
import { EntrenadorService } from '../../../../services/Entrenador.service';

@Component({
  selector: 'app-registrar-entrenamineto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, NgFor],
  templateUrl: './registrar-entrenamineto.component.html',
  styleUrl: './registrar-entrenamineto.component.css',
})
export class RegistrarEntrenaminetoComponent implements OnInit {
  formulario!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  entrenadorOptions: any;

  constructor(
    private formBuilder: FormBuilder,
    private _entrenamientoService: EntrenamientoService,
    private _trainerService: EntrenadorService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this._trainerService.getEntrenadores().subscribe(
      (response) => {
        this.entrenadorOptions = response;
        console.log(this.entrenadorOptions);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }

  private initializeForm(): void {
    const { required, pattern, email } = Validators;
    this.formulario = this.formBuilder.group({
      nombre: ['', required],
      duracion: ['', [pattern('^[0-9]*$'), required]],
      descripcion: ['', required],
      entrenador: ['', required],
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
        entrenador: {
          cedula: this.formulario.value.entrenador,
        }
      };
      console.log(formData);

      this._entrenamientoService.crearEntrenamiento(formData).subscribe(
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
    }, 3000);
  }
}
