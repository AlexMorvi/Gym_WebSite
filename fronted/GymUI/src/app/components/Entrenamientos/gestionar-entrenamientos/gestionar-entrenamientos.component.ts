import { Component, OnInit } from '@angular/core';
import { TabletUpdateComponent } from '../../ui/tablet-update/tablet-update.component';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';
import { EntrenamientoService } from '../../../../services/Entrenamiento.service';

@Component({
  selector: 'app-gestionar-entrenamientos',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './gestionar-entrenamientos.component.html',
  styleUrl: './gestionar-entrenamientos.component.css'
})
export class GestionarEntrenamientosComponent implements OnInit {
  datos: any = [];
  dataFiltered: any = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private _entrainingService: EntrenamientoService
  ) {
  }

  ngOnInit(): void {
    this._entrainingService.getEntrenamientos().subscribe(
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
}
