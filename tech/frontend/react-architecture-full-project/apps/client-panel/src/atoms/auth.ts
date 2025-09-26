import { atom } from "jotai";

import { AuthUser } from "@app-types/index";

export const authAtom = atom<AuthUser>({
    user: null,
    wergonicUser: null,
});

export const pendingAuthStateAtom = atom(true);
