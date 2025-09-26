import { useMutation } from "@tanstack/react-query";
import { confirmPasswordReset, signInWithEmailAndPassword } from "firebase/auth";

import { api, apiRoutes, FirebaseAuth } from "@services/index";

export const signIn = ({ email, password }: ISignInInputs) => {
    return signInWithEmailAndPassword(FirebaseAuth, email, password);
};

export const confirmPassword = (code: string, newPassword: string) => {
    return confirmPasswordReset(FirebaseAuth, code, newPassword);
};

export const useMagicLinkMutation = ({ onSuccess, onError }: { onSuccess: any; onError: any }) => {
    return useMutation({
        mutationFn: (values: { email: string }) => {
            localStorage.setItem("login-email", values.email);
            return api.post(apiRoutes.auth.magicLinkLogin, values);
        },
        onSuccess,
        onError,
    });
};
