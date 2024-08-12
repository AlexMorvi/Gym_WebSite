// src/app/services/entrenador.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './HttpService.service';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpService) {}

  getEntrenadores(): Observable<any> {
    return this.httpService.get(`${this.baseUrl}/entrenadores`);
  }

  
  crearEntrenador(entrenador: any): Observable<any> {
    return this.httpService.post(`${this.baseUrl}/crearEntrenador`, entrenador);
  }

  actualizarEntrenador(entrenador: any): Observable<any> {
    return this.httpService.put(`${this.baseUrl}/actualizarEntrenador/${entrenador.cedula}`, entrenador);
  }

  deleteEntrenador(cedula: string): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/eliminarEntrenador/${cedula}`);
  }
}