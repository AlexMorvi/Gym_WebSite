import { Component, OnInit } from '@angular/core';
import { MembresiaService } from '../../../../services/Membresia.service';
import { TabletUpdateComponent } from '../../ui/tablet-update/tablet-update.component';
import { EntrenamientoService } from '../../../../services/Entrenamiento.service';
import { SearchBarComponent } from '../../ui/search-bar/search-bar.component';

@Component({
  selector: 'app-gestionar-membresia',
  standalone: true,
  imports: [TabletUpdateComponent, SearchBarComponent],
  templateUrl: './gestionar-membresia.component.html',
  styleUrl: './gestionar-membresia.component.css'
})
export class GestionarMembresiaComponent implements OnInit {
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
}
