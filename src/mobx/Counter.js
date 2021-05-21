import {makeObservable, observable, action, computed} from "mobx";

export class Counter {
    numberOfClicks = 0;
    incrementBy = 1;

    constructor() {
        makeObservable(this, {
            numberOfClicks: observable,
            increment: action,
            reset: action,
            shouldShowCongratsMessage: computed
        });
    }


    increment = () => {
        this.numberOfClicks += this.incrementBy;
    }

    reset = () => {
        this.numberOfClicks = 0;
    }

    get shouldShowCongratsMessage() {
        return this.numberOfClicks >= 10;
    }
}