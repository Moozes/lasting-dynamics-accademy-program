import { atom } from "jotai";

import { TUser } from "@app-types/index";

export const authAtom = atom<TUser>({
    firebaseUser: null,
    wergonicUser: null,
});

export const pendingAuthStateAtom = atom(true);
