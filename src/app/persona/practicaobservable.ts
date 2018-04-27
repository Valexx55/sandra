import {Observable} from 'rxjs/Rx';

let obs = Observable.interval(500).take(5);
//Ejemplo 1, 2 observadores
//obs.subscribe(v=> console.log(" recibido "+v ));
//obs.subscribe(v=> console.log(" recibido 2 "+v ));

//http://rxmarbles.com/
//EJEMPLO 2 MAP

//obs.map (j => 2*j).subscribe(valor=> console.log("v = " + valor));

//EJEMPLO 3 FILTER
obs.map (j => 2*j).filter (x => x>4).subscribe(valor=> console.log("v = " + valor));