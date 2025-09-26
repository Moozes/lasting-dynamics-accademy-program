import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import { useTranslationV2 } from "ui";

import { r } from "@routes/routes";
import { FirebaseAuth } from "@services/index";

type TValues = { email: string; password: string };

export const useLoginForm = () => {
    const t = useTranslationV2();
    const loginInitialValues: TValues = { email: "", password: "" };
    const loginValidationSchema = yup.object({
        password: yup.string().required(t("auth.password_required_error")).min(8, t("auth.password_length_error")),
        email: yup.string().email(t("auth.email_format_error")).required(t("auth.email_required_error")),
    });
    return { loginInitialValues, loginValidationSchema };
};

export const useFirebaseSignIn = () => {
    const t = useTranslationV2();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [loading, setLoading] = useState<boolean>(false);

    async function firebaseSignIn(values: TValues) {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(FirebaseAuth, values.email, values.password);
            setLoading(false);
            navigate(r.gar(r.routes.root));
        } catch (error: any) {
            if (error.code === "auth/user-disabled") {
                enqueueSnackbar(t("auth.deactivated_error"), { severity: "error" });
            } else {
                enqueueSnackbar(t("auth.wrong_credentials"), { severity: "error" });
            }
            setLoading(false);
        }
    }

    return { loading, firebaseSignIn };
};
