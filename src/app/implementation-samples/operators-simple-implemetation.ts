import { SubscribeLogic } from "src/app/implementation-samples/observable-simple-implementation";
import { ObserverHandlers, Observer } from "src/app/implementation-samples/observer-simple-implementation";

export interface UnaryFunction<T, R> { (source: T): R; }

export interface OperatorFunction<T, R> extends UnaryFunction<Observable<T>, Observable<R>> { }

/*  pipe implementaion 

*/
export class Observable<T> {
    subscribeLogic: Function;

    constructor(subscribeLogic: SubscribeLogic) {
        this.subscribeLogic = subscribeLogic;
    }

    subscribe(observerHandlers: ObserverHandlers) {
        const observer = new Observer(observerHandlers);
        const unsubscribeLogic = this.subscribeLogic(observer);
        observer.unsubscribeLogic = unsubscribeLogic;

        return {
            unsubscribe() {
                observer.unsubscribe();
            }
        };
    }

    pipe<R>(...operations: OperatorFunction<T, R>[]): Observable<R> {
        if (operations.length === 0) {
            return this as any;
        }

        return pipeFromArray(operations)(this);
    }
}

export function pipeFromArray<T, R>(fns: Array<UnaryFunction<T, R>>): UnaryFunction<T, R> {
    if (fns.length === 1) {
        return fns[0];
    }

    return function piped(input: T): R {
        return fns.reduce((prev: any, fn: UnaryFunction<T, R>) => fn(prev), input as any);
    }; 
}

/*
    Operators implementation.
    This sample operator takes every nth value.
    function that returns function  
*/

const takeEveryDividedNth = (n: number) => <T>(source: Observable<T>) =>
new Observable<T>(observer => {
    return source.subscribe({
        next(value) {
            if (value % n === 0) observer.next(value);
        },
        error(err) { observer.error(err); },
        complete() { observer.complete(); }
    })
});


/**
 * Usage sample
*/

const observable = new Observable(observer => {
    [1,2,3,4,5].forEach((value) => observer.next(value));
});

const pipedSample = observable.pipe(takeEveryDividedNth(2), takeEveryDividedNth(4));

console.log(pipedSample.subscribe({
    next: (value) => console.log(value)
}));

// console output: 4