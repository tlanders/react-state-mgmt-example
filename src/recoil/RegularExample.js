import {CounterButton} from "./CounterButton";
import {shouldShowCongratsState} from "./shouldShowCongratsState";
import {useRecoilValue} from "recoil";

export const RegularExample = () => {
    const shouldShowCongrats = useRecoilValue(shouldShowCongratsState)
    return (
        <>
            <h1>Regular Example</h1>
            <CounterButton/>
            {shouldShowCongrats && (<h3>Congrats! You have reached 10 clicks!</h3>)}
        </>
    )
}