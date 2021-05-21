import {useContext} from "react";
import {CounterContext} from "./CounterContext";

export const CounterButton = () => {
    const {numClicks, increment, reset} = useContext(CounterContext);

    return (
        <>
            <p>You have clicked the button {numClicks} times</p>
            <button onClick={increment}>Click Here</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}