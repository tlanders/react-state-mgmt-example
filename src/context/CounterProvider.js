import {CounterContext} from "./CounterContext";
import {useState} from "react";

export const CounterProvider = ({children}) => {
    const [numClicks, setNumClicks] = useState(0);
    const increment = () => {setNumClicks(numClicks + 1)};
    const reset = () => {setNumClicks(0)};
    return (
        <>
            <CounterContext.Provider value={{
                numClicks,
                increment,
                reset
            }}>
                {children}
            </CounterContext.Provider>
        </>
    );
}