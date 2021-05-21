import { numberOfClicksState} from "./numberOfClicksState";
import { selector} from "recoil";

export const shouldShowCongratsState = selector({
    key: 'shouldShowCongrats',
    get: ({get}) => {
        const numClicks = get(numberOfClicksState);
        return numClicks >= 10;
    }
})