import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUnidadMedida } from '../Interfaces/iunidadmedida';

@Injectable({
  providedIn: 'root'
})
export class UnidadmedidaService {
  private apiUrl = 'http://localhost/backend/public/index.php';

  constructor(private http: HttpClient) {}

  insertar(unidadMedida: IUnidadMedida): Observable<any> {
    return this.http.post(`${this.apiUrl}?action=insertar`, unidadMedida);
  }

  update(unidadMedida: IUnidadMedida): Observable<any> {
    return this.http.post(`${this.apiUrl}?action=actualizar`, unidadMedida);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?action=eliminar`, {
      body: { idUnidad_Medida: id }
    });
  }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { AppComponent } from './app.component';
import { NuevaunidadmedidaComponent } from './components/nuevaunidadmedida/nuevaunidadmedida.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaunidadmedidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Importar HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

