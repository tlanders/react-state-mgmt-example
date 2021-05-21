import {INCREMENTED, RESET} from './actions';

export const numberOfClicksReducer = (numClicks = 0, action) => {
    switch (action.type) {
        case INCREMENTED:
            const {incrementBy} = action.payload;
            return numClicks + incrementBy;
        case RESET:
            return 0;
        default:
            return numClicks
    }
}