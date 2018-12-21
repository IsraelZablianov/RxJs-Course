import { Observable } from "rxjs";

/*          
    1. Creation of observable
    2. First invokation
*/

const observable: Observable<string> = new Observable(observer => {
    const interval = setInterval(() => {
        observer.next('Hello from Observableland!');
    }, 1000);

    return () => {
        clearInterval(interval);
    };
});

observable.subscribe(value => console.log(value));
