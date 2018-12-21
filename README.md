# RxjsExample

In this course we will present a simple implementation of RxJS `Observable`, `Subject` and `Pipe` method of Observable. <br />

The presentation of this course is [RxJS.pptx](RxJS.pptx) <br />

## Code Examples

Under `src` folder you will find 2 inner folders `implementation` and `usage` <br />

Under `implementation` folder, you will find a simple implementation of the core classes and structures that `RxJS` uses. <br />

For example:

`Observable`
```ts
import { Observer, ObserverHandlers } from "./observer";

export type SubscribeLogic = (observer: Observer) => any;

export class Observable {
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
}
```

Under `usage` folder, you will find examples of how to use `Rxjs` `Observable`, `Subject` and `Operatos`. <br />