import { of } from 'rxjs';
import { Observable } from 'rxjs';

export default () => {

    const observable = new Observable(observer => {
        setTimeout(() => {
            console.log("In Timeout ");
            observer.next("Israel");
        }, 2000)
    });

    observable.subscribe(val => console.log("I am 1 " + val));
    observable.subscribe(val => console.log("I am 2 " + val));
    observable.subscribe(val => console.log("I am 3 " + val));
    observable.subscribe(val => console.log("I am 4 " + val));
    observable.subscribe(val => console.log("I am 5 " + val));
    observable.subscribe(val => console.log("I am 6 " + val));

};