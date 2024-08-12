// src/app/services/membresia.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './HttpService.service';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpService) {}

  getMembresias(): Observable<any> {
    return this.httpService.get(`${this.baseUrl}/membresias`);
  }

  crearMembresia(membresia: any): Observable<any> {
    return this.httpService.post(`${this.baseUrl}/crearMembresia`, membresia);
  }

  actualizarMembresia(membresia: any): Observable<any> {
    return this.httpService.put(`${this.baseUrl}/actualizarMembresia/${membresia.idMembresia}`, membresia);
  }

  deleteMembresia(id: string): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/eliminarMembresia/${id}`);
  }
}