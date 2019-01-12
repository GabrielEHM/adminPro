import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {


  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyend: string;
  @Input() porcentage: number;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.porcentage = 50;
    this.leyend = 'leyenda';
  }

  ngOnInit() {
  }

  setExactValue( value: number ) {
    // const elemHTML: any = document.getElementsByName('porcentage')[0];
    // console.log(elemHTML.value );
    if ( value > 100 ) {
      this.porcentage = 100;
    } else if (value < 0) {
      this.porcentage = 0;
    } else {
      this.porcentage = value;
    }
    // elemHTML.value = Number(this.porcentage);
    this.txtProgress.nativeElement.value = this.porcentage;
    this.valueChange.emit(this.porcentage);
  }
  setValue( value: number ) {
    if ( this.porcentage + value > 100 || this.porcentage + value < 0) {
      return;
    }
    this.porcentage = this.porcentage + value;
    this.valueChange.emit(this.porcentage);
    this.txtProgress.nativeElement.focus();
  }

}
