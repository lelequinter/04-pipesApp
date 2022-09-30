import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';

  nombre: string = 'Leyder'
  valor: number = 12123123
  obj = {
    nombre: 'fern'
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
  }
}
