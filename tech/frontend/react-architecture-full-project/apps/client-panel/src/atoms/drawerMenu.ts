import { atom } from "jotai";

// dont use this atom directly because there is useIsDrawerOpenCustomState hook
// if drawer is permanent (ie: large screen) then drawer always open, else it can toggle
export const isDrawerOpenAtom = atom<boolean>(false);
