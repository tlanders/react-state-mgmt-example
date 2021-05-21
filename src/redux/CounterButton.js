import {useSelector, useDispatch} from 'react-redux';
import {reset, incremented} from "./actions";

export const CounterButton = () => {
    const numClicks = useSelector(state => state.numberOfClicks);
    const dispatch = useDispatch();

    return (
        <>
            <p>You have clicked the button {numClicks} times</p>
            <button onClick={() => dispatch(incremented(1))}>Click Here</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}