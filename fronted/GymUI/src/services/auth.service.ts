import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';  // URL del backend para la autenticación

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const credentials = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.loginUrl, credentials, { headers })
      .pipe(
        map(response => {
          // Suponiendo que el backend devuelve un token si la autenticación es exitosa
          if (response && response.token) {
            localStorage.setItem('token', response.token); // Guarda el token en el localStorage
            return true;
          } else {
            return false;
          }
        }),
        catchError(this.handleError<boolean>('login', false))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}