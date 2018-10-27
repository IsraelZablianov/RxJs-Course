export interface ObserverHandlers {
    next: (value?: any) => void;
    error?: (error?: any) => void;
    complete?: () => void;
}

export class Observer {
    isUnsubscribed: boolean;
    handlers: ObserverHandlers;
    unsubscribeLogic: Function;

    constructor(observerHandlers: ObserverHandlers) {
        this.handlers = observerHandlers;
        this.isUnsubscribed = false;
    }

    next(value: any) {
        if (this.handlers.next && !this.isUnsubscribed) {
            this.handlers.next(value);
        }
    }

    error(error) {
        if (!this.isUnsubscribed) {
            if (this.handlers.error) {
                this.handlers.error(error);
            }

            this.unsubscribe();
        }
    }

    complete() {
        if (!this.isUnsubscribed) {
            if (this.handlers.complete) {
                this.handlers.complete();
            }

            this.unsubscribe();
        }
    }

    unsubscribe() {
        this.isUnsubscribed = true;

        if (this.unsubscribeLogic) {
            this.unsubscribeLogic();
        }
    }
}