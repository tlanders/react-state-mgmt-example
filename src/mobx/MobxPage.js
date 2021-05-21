import {RegularExample} from "./RegularExample";
import {Counter} from "./Counter";
import {CounterButton} from "./CounterButton";
// import {useContext} from "react";

const counter = new Counter();

export const MobxPage = () => {
    return (
        <>
            <h1>Mobx Page</h1>
            <CounterButton counter={counter}/>
        </>
    );
}