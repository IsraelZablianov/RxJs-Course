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
