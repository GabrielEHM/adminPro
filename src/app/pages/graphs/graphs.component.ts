import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styles: []
})
export class GraphsComponent implements OnInit {
  graficos: any = {
    'grafico1': {
      'labels': ['Argentina', 'Spain', 'United States'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'Visitors from'
    },
    'grafico2': {
      'labels': ['Male visitors', 'Female visitors'],
      'data':  [6000, 4500],
      'type': 'doughnut',
      'leyenda': 'Demographics'
    },
    'grafico3': {
      'labels': ['Over 5min', 'Under 5min'],
      'data':  [30, 70],
      'type': 'doughnut',
      'leyenda': 'Retention rate'
    },
    'grafico4': {
      'labels': ['Saved', 'Not Saved'],
      'data':  [65, 35],
      'type': 'doughnut',
      'leyenda': 'Visitors profile saving rate'
    },
  };
  constructor() { }

  ngOnInit() {
  }

  getGraphs() {
    return Array.from(this.graficos);
  }
}
