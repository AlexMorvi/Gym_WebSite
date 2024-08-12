import { Component } from '@angular/core';
import { EntrenamientoService } from '../../../../services/Entrenamiento.service';
import { TabletDeleteComponent } from '../../ui/tablet-delete/tablet-delete.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-eliminar-entrenamientos',
  standalone: true,
  imports: [TabletDeleteComponent, SearchBarComponent, NgIf],
  templateUrl: './eliminar-entrenamientos.component.html',
  styleUrl: './eliminar-entrenamientos.component.css'
})
export class EliminarEntrenamientosComponent {
  datos: any = [];
  dataFiltered: any = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private _trainingService: EntrenamientoService
  ) {
  }

  ngOnInit(): void {
    this._trainingService.getEntrenamientos().subscribe(
      (response) => {
        this.datos = response;
        this.dataFiltered = response; 
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }

  receiveSearchText(text: string) {
    const searchText = text.trim().toLowerCase();
    if (searchText === '') {
      this.dataFiltered = [...this.datos]; 
    } else {
      const searchPattern = new RegExp(searchText, 'i'); 
      this.dataFiltered = this.datos.filter(
        (entrenamiento: any) =>
          searchPattern.test(entrenamiento.idEntrenamiento) 
      );
    }
  }

  private hideMessagesAfterTimeout(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000); 
  }

  deleteRow(entrenamiento: any): void {
    
    this._trainingService.deleteEntrenamiento(entrenamiento.idEntrenamiento).subscribe(
      (response) => {
        this.successMessage = 'entrenamiento eliminado correctamente';
        this.hideMessagesAfterTimeout();
        this.datos = this.datos.filter(
          (client: any) => { client.cedula !== entrenamiento.idEntrenamiento;
          }
        );
        this.dataFiltered = this.datos;
      },
      (error) => {
        this.errorMessage = 'Error al eliminar el entrenamiento' + error.message;
        this.hideMessagesAfterTimeout();
      }
    );
  }
}
