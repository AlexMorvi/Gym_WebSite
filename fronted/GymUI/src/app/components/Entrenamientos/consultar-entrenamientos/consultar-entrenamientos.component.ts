import { Component, OnInit } from '@angular/core';
import { EntrenamientoService } from '../../../../services/Entrenamiento.service';
import { TabletComponent } from '../../ui/tablet/tablet.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-consultar-entrenamientos',
  standalone: true,
  imports: [TabletComponent, SearchBarComponent],
  templateUrl: './consultar-entrenamientos.component.html',
  styleUrl: './consultar-entrenamientos.component.css',
})
export class ConsultarEntrenamientosComponent implements OnInit {
  datos: any = [];
  dataFiltered: any = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private _trainingService: EntrenamientoService) {}

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
      this.dataFiltered = this.datos.filter((entrenamiento: any) =>
        searchPattern.test(entrenamiento.idEntrenamiento)
      );
    }
  }
}
