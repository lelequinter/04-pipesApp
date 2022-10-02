import { Component } from '@angular/core';
import { interval } from "rxjs";

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

  //Json Pipe
  heroes =[
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Wolverine',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  });
}
