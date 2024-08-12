// src/app/services/cliente.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './HttpService.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpService: HttpService) {}

  getClientes(): Observable<any> {
    return this.httpService.get(`${this.baseUrl}/clientes`);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.httpService.post(`${this.baseUrl}/crearCliente`, cliente);
  }

  actualizarCliente(cliente: any): Observable<any> {
    return this.httpService.put(`${this.baseUrl}/actualizarCliente/${cliente.cedula}`, cliente);
  }

  deleteCliente(cedula: string): Observable<any> {
    return this.httpService.delete(`${this.baseUrl}/eliminarCliente/${cedula}`);
  }
}