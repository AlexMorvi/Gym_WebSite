import { Component } from '@angular/core';
import { TabletDeleteComponent } from '../../ui/tablet-delete/tablet-delete.component';
import { ClienteService } from '../../../../services/Cliente.service';
import { NgIf } from '@angular/common';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-eliminar-cleinte',
  standalone: true,
  imports: [TabletDeleteComponent, SearchBarComponent, NgIf],
  templateUrl: './eliminar-cleinte.component.html',
  styleUrl: './eliminar-cleinte.component.css'
})
export class EliminarCleinteComponent {
  datos: any = [];
  dataFiltered: any = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private _clientService: ClienteService
  ) {
  }

  ngOnInit(): void {
    this._clientService.getClientes().subscribe(
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
    
    this._clientService.deleteCliente(cliente.cedula).subscribe(
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
