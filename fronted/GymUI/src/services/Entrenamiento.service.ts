// src/app/services/entrenamiento.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './HttpService.service';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpService) {}

  getEntrenamientos(): Observable<any> {
    return this.httpService.get(`${this.baseUrl}/entrenamientos`);
  }

  crearEntrenamiento(entrenamiento: any): Observable<any> {
    return this.httpService.post(`${this.baseUrl}/crearEntrenamiento`, entrenamiento);
  }

  actualizarEntrenamiento(entrenamiento: any): Observable<any> {
    return this.httpService.put(`${this.baseUrl}/actualizarEntrenamiento/${entrenamiento.id}`, entrenamiento);
  }

  deleteEntrenamiento(id: string): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/eliminarEntrenamiento/${id}`);
  }
}