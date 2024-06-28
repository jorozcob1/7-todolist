import { Component, Inject } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
})
export class ListaTareasComponent {
  // Array de tareas
  tareas: string[] = [];
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorageTareas = document.defaultView?.localStorage;
    this.tareas = [];
    let datos = localStorageTareas?.getItem('tareas');
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        for (let tarea of arreglo) {
          this.tareas.push(tarea);
        }
      }
    }
  }
  // Contador para las tareas
  contador: number = 1;

  // Propiedad para indicar si una tarea está completada o no
  tareaCompletada: boolean[] = Array(this.tareas.length).fill(false);

  // Método para agregar una tarea
  agregarTarea(nuevaTarea: string) {
    this.tareas.push(nuevaTarea);
    //  this.tareaCompletada.push(false);
    this.contador++;
  }

  // Método para eliminar una tarea
  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
    this.tareaCompletada.splice(indice, 1);
  }

  // Método para cambiar el estado de una tarea
  cambiarEstado(indice: number) {
    this.tareaCompletada[indice] = !this.tareaCompletada[indice];
  }
}
