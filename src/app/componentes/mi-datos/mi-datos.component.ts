import { Component, OnInit } from '@angular/core';
import { BotonComponent } from "../boton/boton.component";

@Component({
  selector: 'app-mi-datos',
  standalone: true,
  imports: [BotonComponent],
  templateUrl: './mi-datos.component.html',
  styleUrl: './mi-datos.component.scss'
})
export class MiDatosComponent implements OnInit  {

  ngOnInit(): void {
    console.log('Componente MiDatosComponent inicializado');
    this.nombre = 'Juan Pérez';
  }

  nombre: string ="";
  edad: number = 30;
  profesion: string = 'Desarrollador de Software';
  ciudad: string = 'Madrid';

}
