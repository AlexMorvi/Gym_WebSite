import { Component } from '@angular/core';
import { TabletDeleteComponent } from '../../ui/tablet-delete/tablet-delete.component';
import { EntrenadorService } from '../../../../services/Entrenador.service';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-eliminar-entrenador',
  standalone: true,
  imports: [TabletDeleteComponent, SearchBarComponent, NgIf],
  templateUrl: './eliminar-entrenador.component.html',
  styleUrl: './eliminar-entrenador.component.css'
})
export class EliminarEntrenadorComponent {
  datos: any = [];
  dataFiltered: any = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private _trainerService: EntrenadorService
  ) {
  }

  ngOnInit(): void {
    this._trainerService.getEntrenadores().subscribe(
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
        (cliente: any) =>
          searchPattern.test(cliente.cedula) 
      );
    }
  }

  private hideMessagesAfterTimeout(): void {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000); 
  }

  deleteRow(cliente: any): void {
    console.log(cliente.cedula);
    
    this._trainerService.deleteEntrenador(cliente.cedula).subscribe(
      (response) => {
        this.successMessage = 'Cliente eliminado correctamente';
        this.hideMessagesAfterTimeout();
        this.datos = this.datos.filter(
          (client: any) => {
            return client.cedula !== cliente.cedula;
          }
        );
        this.dataFiltered = this.datos;
        console.log(this.dataFiltered);
        
      },
      (error) => {
        this.errorMessage = 'Error al eliminar el cliente' + error.message;
        this.hideMessagesAfterTimeout();
      }
    );
  }
}
