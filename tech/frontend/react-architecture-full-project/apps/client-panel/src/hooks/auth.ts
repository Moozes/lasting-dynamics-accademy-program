import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { UserRoleEnum, useTranslationV2 } from "ui";

import { AuthUser, WergonicUser } from "@app-types/index";
import { authAtom, pendingAuthStateAtom } from "@atoms/index";
import { api, FirebaseAuth } from "@services/index";

export const useAuth = () => {
    const [pendingAuthState, setPendingAuthState] = useAtom(pendingAuthStateAtom);
    const [auth, setAuth] = useAtom(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const t = useTranslationV2();
    useEffect(() => {
        const unsubscribeFromAuthState = onAuthStateChanged(FirebaseAuth, async (user) => {
            let authTmp: AuthUser = {
                user: null,
                wergonicUser: null,
            };
            if (user) {
                const newWergonicUser = await api.get<{ user: WergonicUser }>("/users/current");
                // prevent worker from logging in
                if (newWergonicUser.data.user.role === UserRoleEnum.WORKER) {
                    enqueueSnackbar(t("auth.login.worker_cant_access_app"), { severity: "error" });
                    // if worker singout from firebase
                    await signOut(FirebaseAuth);
                    // if worker singout from local app
                    authTmp = {
                        user: null,
                        wergonicUser: null,
                    };
                } else {
                    authTmp = {
                        user,
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
    }, [setAuth, setPendingAuthState]);

    return { pendingAuthState, auth };
};
