import { of } from 'rxjs';
import { Observable, Subject } from 'rxjs';

/*          
    1. Subject has state, it keeps a list of observers. 
    On the other hand, an Observable is really just a function that sets up observation.
*/

export default () => {

    const observable = new Observable(observer => {
        console.log("In observer logic ");
        setInterval(() => {
            observer.next("Israel");
        }, 3000)
    });

    var subject = new Subject();

    observable.subscribe((val) => {
        subject.next(val);
    })

    subject.subscribe(val => console.log("I am 1 " + val));
    subject.subscribe(val => console.log("I am 2 " + val));
    subject.subscribe(val => console.log("I am 3 " + val));

    setTimeout(() => {
        subject.subscribe(val => console.log("I am 4 " + val));
    }, 5000);

};