import { atom } from "jotai";

export const commentDialogOpenAtom = atom<boolean>(false);
export const commentDialogInputNameAtom = atom<string>("");

export const PushingAndPullingInfoDialogOpenAtom = atom<boolean>(false);

export const informationDialogOpenAtom = atom<boolean>(false);
export const informationDialogTextAtom = atom<string>("");
