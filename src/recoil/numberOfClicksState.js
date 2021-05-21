import {atom} from "recoil";

export const numberOfClicksState = atom({
    key: 'numberOfClicks',
    default: 0,
})