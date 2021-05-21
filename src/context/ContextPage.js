import {RegularExample} from "./RegularExample";
import {CounterProvider} from "./CounterProvider";

export const ContextPage = () => {
    return (
        <>
            <CounterProvider>
                <h1>Context Page</h1>
                <RegularExample/>
            </CounterProvider>
        </>
    );
}