import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { UserRoleEnum, useTranslationV2 } from "ui";

import { TUser } from "@app-types/index";
import { authAtom, pendingAuthStateAtom } from "@atoms/index";
import { readCurrentUser } from "@queries/index";
import { FirebaseAuth } from "@services/index";

export const useAuth = () => {
    const [pendingAuthState, setPendingAuthState] = useAtom(pendingAuthStateAtom);
    const [auth, setAuth] = useAtom(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    useEffect(() => {
        const unsubscribeFromAuthState = onAuthStateChanged(FirebaseAuth, async (user) => {
            let authTmp: TUser = {
                firebaseUser: null,
                wergonicUser: null,
            };
            if (user) {
                const newWergonicUser = await readCurrentUser();
                // prevent worker from logging in
                if (
                    newWergonicUser.data.user.role === UserRoleEnum.WORKER ||
                    newWergonicUser.data.user.role === UserRoleEnum.ERGONOMIST ||
                    newWergonicUser.data.user.role === UserRoleEnum.ORG_ADMIN
                ) {
                    enqueueSnackbar(t("auth.only_super_admins_can_access_the_app"), { severity: "error" });
                    // if not wegonig admin (ie: super admin), singout from firebase
                    await signOut(FirebaseAuth);
                    // if not wegonig admin (ie: super admin), singout from local app
                    authTmp = {
                        firebaseUser: null,
                        wergonicUser: null,
                    };
                } else {
                    authTmp = {
                        firebaseUser: user,
                        wergonicUser: { ...newWergonicUser.data.user },
                    };
                }
            }
            setAuth(authTmp);
            setPendingAuthState(false);
        });

        return () => {
            unsubscribeFromAuthState();
        };
    }, [enqueueSnackbar, setAuth, setPendingAuthState, t]);

    return { pendingAuthState, auth };
};
