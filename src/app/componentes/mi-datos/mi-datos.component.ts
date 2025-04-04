import { Component } from '@angular/core';
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-mi-datos',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './mi-datos.component.html',
  styleUrl: './mi-datos.component.scss'
})
export class MiDatosComponent {

  nombre: string = 'Juan Pérez';
  edad: number = 30;
  profesion: string = 'Desarrollador de Software';
  ciudad: string = 'Madrid';
}
