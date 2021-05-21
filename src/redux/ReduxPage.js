import {RegularExample} from "./RegularExample";
import {store} from "./store";
import {Provider} from "react-redux";

export const ReduxPage = () => {
    return (
        <>
            <Provider store={store}>
                <h1>Redux Page</h1>
                <RegularExample/>
            </Provider>
        </>
    );
}