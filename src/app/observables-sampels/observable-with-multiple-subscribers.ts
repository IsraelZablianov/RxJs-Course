import { of } from 'rxjs';
import { Observable } from 'rxjs';

/*          
    1. Every subscription invokes the observable logic, new Observer instance is created
*/

export default () => {

    const observable = new Observable(observer => {
        console.log("In observer logic ");
        setInterval(() => {
            observer.next("Israel");
        }, 3000)
    });

    observable.subscribe(val => console.log("I am 1 " + val));
    observable.subscribe(val => console.log("I am 2 " + val));
    observable.subscribe(val => console.log("I am 3 " + val));

    setTimeout(() => {
        observable.subscribe(val => console.log("I am 4 " + val));
    }, 5000);
};