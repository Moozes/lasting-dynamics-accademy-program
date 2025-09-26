import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyPasswordResetCode } from "firebase/auth";

import { ResetPassword, TokenExpired } from "@assets/index";
import { CreateNewPasswordForm, LinkExpiredForm } from "@features/auth/index";
import { FirebaseAuth } from "@services/index";
import { URL_CODE_KEY } from "@utils/index";

export const useVerifyPasswordResetPage = () => {
    const [searchParams] = useSearchParams();

    const [isResetCodeValid, setIsResetCodeValid] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>("");
    const [resetCodeVerificationLoading, setResetCodeVerificationLoading] = useState<boolean>(false);

    const resetCode = searchParams.get(URL_CODE_KEY);

    async function verifyResetCode(code: string | null) {
        if (!code) {
            setIsResetCodeValid(false);
            setResetCodeVerificationLoading(false);
            return;
        }

        try {
            setResetCodeVerificationLoading(true);
            const email = await verifyPasswordResetCode(FirebaseAuth, code);
            setIsResetCodeValid(true);
            setUserEmail(email);
        } catch (error) {
            setIsResetCodeValid(false);
        } finally {
            setResetCodeVerificationLoading(false);
        }
    }

    useEffect(() => {
        verifyResetCode(resetCode);
    }, [resetCode]);

    return { isResetCodeValid, resetCodeVerificationLoading, userEmail };
};

export const usePasswordResetUI = (isResetCodeValid: boolean) => {
    const RightSideAsset = isResetCodeValid ? ResetPassword : TokenExpired;
    const Form = isResetCodeValid ? CreateNewPasswordForm : LinkExpiredForm;

    return { RightSideAsset, Form };
};
