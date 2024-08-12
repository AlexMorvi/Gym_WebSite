import { Component } from '@angular/core';
import { ClienteService } from '../../../../services/Cliente.service';
import { TabletComponent } from '../../ui/tablet/tablet.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [TabletComponent, SearchBarComponent],
  templateUrl: './consultar-cliente.component.html',
})
export class ConsultarClienteComponent {
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
}
