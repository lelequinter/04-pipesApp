import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Leyder';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Pedro', 'Diego', 'Ivan', 'Ricardo']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente() {
    this.nombre = 'Margarita';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Leyder',
    edad: 35,
    direccion: 'Otawa, Canadá'
  }


}
