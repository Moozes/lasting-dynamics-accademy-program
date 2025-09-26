import { useState } from "react";
import { getAdditionalUserInfo, getAuth, GoogleAuthProvider, OAuthProvider, signInWithPopup } from "firebase/auth";
import { useSnackbar } from "notistack";

import { useTranslationV2 } from "ui";

import { signIn } from "@features/auth/api";
import { useSigninSchema } from "@features/auth/schemas";

export const useLoginForm = () => {
    const loginInitialValues = { email: "", password: "" };
    const { signinSchema: loginValidationSchema } = useSigninSchema();
    return { loginInitialValues, loginValidationSchema };
};

export const useFirebaseSignIn = () => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();

    const [loading, setLoading] = useState<boolean>(false);

    async function firebaseSignIn(values: ISignInInputs) {
        setLoading(true);
        try {
            await signIn(values);
            setLoading(false);
        } catch (error: any) {
            if (error.code === "auth/user-disabled") {
                enqueueSnackbar(t("auth.login.disactivated_error"), { severity: "error" });
            } else {
                enqueueSnackbar(t("auth.login.wrong_credentials"), { severity: "error" });
            }
            setLoading(false);
        }
    }

    return { loading, firebaseSignIn };
};

export const useGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const googleAuth = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithPopup(auth, provider);
            const user = response.user;

            const additionalUserInfo = getAdditionalUserInfo(response);

            const isNewUser = additionalUserInfo?.isNewUser;
            if (isNewUser) {
                // stop firebase from creating an account
                user.delete();
            }
        } catch (error: any) {
            if (error?.response) {
                enqueueSnackbar(error.response.data.error, { variant: "error" });
            } else {
                enqueueSnackbar(error.message, { variant: "error" });
            }
        }
        setIsLoading(false);
    };
    return { isLoading, googleAuth };
};

export const useMicrosoftAuth = () => {
    const provider = new OAuthProvider("microsoft.com");
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);

    const { enqueueSnackbar } = useSnackbar();

    const microsoftAuth = async () => {
        setIsLoading(true);
        try {
            const response = await signInWithPopup(auth, provider);
            const user = response.user;

            const additionalUserInfo = getAdditionalUserInfo(response);
            const isNewUser = additionalUserInfo?.isNewUser;

            if (isNewUser) {
                // stop firebase from creating an account
                user.delete();
            }
        } catch (error: any) {
            if (error?.response) {
                enqueueSnackbar(error.response.data.error, { variant: "error" });
            } else {
                enqueueSnackbar(error.message, { variant: "error" });
            }
        }
        setIsLoading(false);
    };

    return { isLoading, microsoftAuth };
};
