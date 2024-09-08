import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {
  private apiUrl = 'http://localhost/path_to_your_backend/';

  constructor(private http: HttpClient) { }

  updateUnidadMedida(id: number, nombre: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}UnidadMedidaController.php`, { id, nombre });
  }

  deleteUnidadMedida(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}UnidadMedidaController.php?id=${id}`);
  }
}
