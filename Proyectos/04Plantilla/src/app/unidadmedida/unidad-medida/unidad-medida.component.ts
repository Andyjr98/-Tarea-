import { Component } from '@angular/core';
import { UnidadMedidaService } from '../unidad-medida.service';

@Component({
  selector: 'app-unidad-medida',
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent {
  unidadesMedidas: any[] = []; // Cambia esto según el formato de tus datos

  constructor(private unidadMedidaService: UnidadMedidaService) { }

  eliminar(id: number) {
    this.unidadMedidaService.deleteUnidadMedida(id).subscribe(
      response => {
        console.log('Eliminado con éxito', response);
        // Actualiza la lista después de eliminar
        this.loadUnidadesMedidas();
      },
      error => {
        console.error('Error al eliminar', error);
      }
    );
  }

  // Método para cargar las unidades de medida
  loadUnidadesMedidas() {
    // Implementa la lógica para cargar las unidades de medida
  }
}
