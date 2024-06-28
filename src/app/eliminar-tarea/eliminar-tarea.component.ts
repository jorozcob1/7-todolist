import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css',
})
export class EliminarTareaComponent {
  @Input() eliminarTareasRecibida: string[] = [];
  @Input() recibirIndex: number = -1;
  //Metodo para eliminar tareas
  eliminarTarea(index: number) {
    // Eliminar el elemento de la lista en tu componente
    this.eliminarTareasRecibida.splice(index, 1);
    localStorage.setItem('tareas', JSON.stringify(this.eliminarTareasRecibida));
  }
}
