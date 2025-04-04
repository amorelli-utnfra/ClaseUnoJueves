import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MiDatosComponent } from './componentes/mi-datos/mi-datos.component';
import { BotonComponent } from "./componentes/boton/boton.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, MiDatosComponent, BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  numero1: number = 0;  
  numero2: number = 0;
  resultado: number = 0;

  calcular() {
    this.resultado = this.numero1 + this.numero2;
  }

}
