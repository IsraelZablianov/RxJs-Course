import { Observable } from "rxjs";

export default () => {

    const observable: Observable<string> = new Observable(observer => {
    const interval = setInterval(() => {
        observer.next('Hello from Observableland!');
    }, 1000);

    // teardown
    return () => {
        clearInterval(interval);
    };
    });

    observable.subscribe(value => console.log(value));

};
