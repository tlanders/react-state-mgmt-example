import {useRecoilState} from "recoil";
import {numberOfClicksState} from "./numberOfClicksState";

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useRecoilState(numberOfClicksState);

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times</p>
            <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>Click Here</button>
            <button onClick={() => setNumberOfClicks(0)}>Reset</button>
        </>
    )
}