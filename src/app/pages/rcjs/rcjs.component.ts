import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rcjs',
  templateUrl: './rcjs.component.html',
  styles: []
})
export class RcjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable().subscribe(num => {

      console.log('Subs', num);
    }, error => console.log('error'), () => console.log('observador termino'));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Page closing');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    const obs = new Observable<any>( (ob: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        const salida = {
          valor: contador
        };

        ob.next(salida);
        // if ( contador === 3) {
        //  clearInterval( intervalo);
        //  ob.complete();
        // }
        // if (contador === 2) {
        // clearInterval( intervalo);
        // ob.error();
        // }
      }, 2000);
    }).pipe(
      map( resp => resp.valor ),
      filter( (valor, index) => {
        // console.log('filter', index , valor);
        if ( (valor % 2) === 1) {
          return false;
        } else {
          return true;
        }
        })
    );
    return obs;
  }

}
