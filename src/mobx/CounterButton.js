import {observer} from "mobx-react";

export const CounterButton = observer(({counter}) => {
    const numClicks = 0;

    return (
        <>
            <p>You have clicked the button {counter.numberOfClicks} times</p>
            <button onClick={() => counter.increment()}>Click Here</button>
            <button onClick={() => counter.reset()}>Reset</button>
            {counter.shouldShowCongratsMessage &&
                <p>Congratulations!</p>
            }

        </>
    );
});