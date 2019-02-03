import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.promesaFunction().then(
      () => console.log('termino'),
      () => console.error('Error en la promesa')
    );
  }

  ngOnInit() {
  }

  promesaFunction() {
   return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        console.log('contador: ' + contador);
        if ( contador === 3) {
          reject();
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
