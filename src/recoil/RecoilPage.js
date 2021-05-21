import {RegularExample} from "./RegularExample";
import {RecoilRoot} from "recoil";

export const RecoilPage = () => {
    return (
        <>
            <RecoilRoot>
                <h1>Recoil Page</h1>
                <RegularExample/>
            </RecoilRoot>
        </>
    );
}