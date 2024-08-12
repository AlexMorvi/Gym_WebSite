import { Component, OnInit } from '@angular/core';
import { EntrenadorService } from '../../../../services/Entrenador.service';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { TabletComponent } from '../../ui/tablet/tablet.component';

@Component({
  selector: 'app-consultar-entrenador',
  standalone: true,
  imports: [TabletComponent, SearchBarComponent],
  templateUrl: './consultar-entrenador.component.html',
  styleUrl: './consultar-entrenador.component.css'
})
export class ConsultarEntrenadorComponent implements OnInit {
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
}
