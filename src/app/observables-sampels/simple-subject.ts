import { of, Observable, Subject } from 'rxjs';

/*          
    1. Subject has state, it keeps a list of observers. 
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