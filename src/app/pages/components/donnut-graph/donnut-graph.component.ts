import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donnut-graph',
  templateUrl: './donnut-graph.component.html',
  styleUrls: ['./donnut-graph.component.css']
})
export class DonnutGraphComponent implements OnInit {
  @Input() ChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() ChartData: number[] = [350, 450, 100];
  @Input() ChartType: 'doughnut';
  @Input() leyend = 'Graph';

  constructor() { }

  ngOnInit() {
  }

}
