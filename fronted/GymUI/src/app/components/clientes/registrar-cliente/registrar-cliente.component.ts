import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ClienteService } from '../../../../services/Cliente.service';
import { HttpService } from '../../../../services/HttpService.service';
import { MembresiaService } from '../../../../services/Membresia.service';

@Component({
  selector: 'app-registrar-cliente',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {
  formulario!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  membresiaOptions: any;

  constructor(
      private formBuilder: FormBuilder,
      private _clientService: ClienteService,
      private _membreService: MembresiaService
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
      membresia: ['', required],
    });
  }

  showError(controlName: string): boolean {
    const control = this.formulario.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  ngOnInit(): void {
    this._membreService.getMembresias().subscribe(
      (response) => {
        this.membresiaOptions = response;
        console.log(this.membresiaOptions);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
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
        membresia: {
          idMembresia: this.formulario.value.membresia,
        }
      };
      console.log(formData);
      
      this._clientService.crearCliente(formData).subscribe(
        (response) => {
          console.log('Datos enviados correctamente', response);
          this.successMessage = 'Datos enviados correctamente';
          this.errorMessage = '';
          this.formulario.reset();
          this.initializeForm();
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
      this.successMessage = ''; 
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
