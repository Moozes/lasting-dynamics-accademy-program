import { useState } from "react";
import { Form, Formik } from "formik";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { Btn, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2, WergonicLogoPurple } from "ui";

import { useFirebaseSignIn, useLoginForm } from "./LoginForm.hooks";

type Props = HTMLDivProps;

export const LoginForm = (props: Props) => {
    const t = useTranslationV2();
    const [passwordInputType, setPasswordInputType] = useState<"password" | "text">("password");
    const togglePasswordInputType = () => setPasswordInputType((prev) => (prev == "password" ? "text" : "password"));
    const { loginInitialValues, loginValidationSchema } = useLoginForm();
    const { loading, firebaseSignIn } = useFirebaseSignIn();
    return (
        <div {...props}>
            <div className="logo-container">
                <WergonicLogoPurple className="logo" />
            </div>
            <div className="title">{t("welcome_back")}</div>
            <div className="title mb">{t("Sign_in_to_Your_Account")}</div>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={loginValidationSchema}
                onSubmit={firebaseSignIn}
                validateOnChange={false}
            >
                {() => (
                    <Form>
                        <FormikOutlinedTextField
                            id="email"
                            name="email"
                            label={t("email")}
                            disabled={loading}
                            type="email"
                        />
                        <FormikOutlinedTextField
                            id="password"
                            name="password"
                            label={t("password")}
                            disabled={loading}
                            type={passwordInputType}
                            endAdornment={
                                <IconButton onClick={togglePasswordInputType}>
                                    {passwordInputType == "password" ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            }
                        />
                        <div className="reset-password-container">
                            <div className="reset-password-link">{t("reset_password")}</div>
                        </div>
                        <Btn loading={loading} type="submit" className="submit-button">
                            {t("Sign_In")}
                        </Btn>
                    </Form>
                )}
            </Formik>
            <div className="terms-and-services">
                <span className="terms-and-services-text">{t("by_continuing_you_agree_to_our")} </span>
                <span className="terms-and-services-link">{t("terms_of_services")} </span>
                <span className="terms-and-services-text">{t("and")} </span>
                <span className="terms-and-services-link">{t("privacy_policy")}</span>
            </div>
        </div>
    );
};
