import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentageBlue: number;
  porcentageGreen: number;

  constructor() {
    this.porcentageBlue = 50;
    this.porcentageGreen = 20;
  }

  ngOnInit() {
  }

  /*update( event: number ) {
    console.log('Evento: ', event);
    this.porcentageBlue = event;
  }*/

}
