import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useAtomValue } from "jotai";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack, useTheme } from "@mui/material";

import {
    Btn,
    EmailIcon,
    FormikOutlinedTextField,
    GmailIcon,
    MicrosoftIcon,
    Typography,
    useTranslationV2,
    WergonicLogoPurple,
} from "ui";

import { pendingAuthStateAtom } from "@atoms/index";
import { Link } from "@components/index";
import AuthFormLayout from "@features/auth/components/AuthFormLayout";
import * as styles from "@features/auth/components/styles/Forms.style";
import routes from "@routes/routes";

import { useFirebaseSignIn, useGoogleAuth, useLoginForm, useMicrosoftAuth } from "./useLoginForm.hooks";

export const LoginForm = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    const navigate = useNavigate();
    const pendingAuthState = useAtomValue(pendingAuthStateAtom);
    const { loginInitialValues, loginValidationSchema } = useLoginForm();
    const { loading, firebaseSignIn } = useFirebaseSignIn();
    const { isLoading: googleIsLoading, googleAuth } = useGoogleAuth();
    const { isLoading: microsoftIsLoading, microsoftAuth } = useMicrosoftAuth();

    const [isPassword, setIsPassword] = useState(true);
    const toggleIsPassword = () => setIsPassword((prev) => !prev);

    return (
        <Box sx={styles.ContainerStyle}>
            <WergonicLogoPurple />
            <Box marginTop={2} marginLeft="10%" alignSelf="start">
                <Typography variant="h4">{t("welcome_back")},</Typography>
            </Box>
            <AuthFormLayout header={t("Sign_in_to_Your_Account")}>
                <Formik
                    onSubmit={firebaseSignIn}
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    <Form noValidate>
                        <Stack gap={2}>
                            <FormikOutlinedTextField
                                disabled={loading}
                                id="email"
                                type="email"
                                name="email"
                                label={t("email")}
                                required
                            />
                            <FormikOutlinedTextField
                                id="password"
                                name="password"
                                label={t("password")}
                                type={isPassword ? "password" : "text"}
                                disabled={loading}
                                endAdornment={
                                    <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                        {isPassword ? (
                                            <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                        ) : (
                                            <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                        )}
                                    </IconButton>
                                }
                                required
                            />
                            <Stack direction="row" justifyContent="flex-end" alignItems="start" spacing={2}>
                                <Typography variant="body2" weight="bold">
                                    <Link sx={styles.ResetPasswordLinkColor} to={routes.auth.initPasswordResetForm}>
                                        {t("reset_password")}
                                    </Link>
                                </Typography>
                            </Stack>
                            <Btn loading={loading || pendingAuthState} type="submit" variant="primary-contained">
                                {t("Sign_In")}
                            </Btn>
                            <Box sx={styles.DividerStyle}>
                                <Divider sx={{ flex: 1 }} />
                                <Typography variant="body2" sx={{ mx: 2 }}>
                                    {t("Or")}
                                </Typography>
                                <Divider sx={{ flex: 1 }} />
                            </Box>
                            <Btn
                                onClick={() => navigate("/auth/login/email")}
                                variant="primary-outlined"
                                startIcon={<EmailIcon />}
                                sx={styles.SocialButton}
                                style={styles.SocialButton(theme)}
                            >
                                {t("auth.login.Sign_in_with_email")}
                            </Btn>
                            <Btn
                                onClick={microsoftAuth}
                                variant="primary-outlined"
                                loading={microsoftIsLoading || pendingAuthState}
                                startIcon={<MicrosoftIcon />}
                                style={styles.SocialButton(theme)}
                            >
                                {t("auth.login.Sign_in_with_Microsoft")}
                            </Btn>
                            <Btn
                                onClick={googleAuth}
                                variant="primary-outlined"
                                loading={googleIsLoading || pendingAuthState}
                                startIcon={<GmailIcon />}
                                style={styles.SocialButton(theme)}
                            >
                                {t("auth.login.Sign_in_with_Google")}
                            </Btn>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                gap={1}
                                sx={styles.PolicyTextContainer}
                            >
                                <Typography component="span" variant="body1" sx={styles.FirstMessageStyles}>
                                    {t("by_continuing_you_agree_to_our")}{" "}
                                    <Link target="_blank" to="https://wergonic.se/privacy-policy-2/">
                                        <Typography component="span" variant="body1" sx={styles.SecondMessageStyles}>
                                            {t("terms_of_services")}{" "}
                                        </Typography>
                                        <Typography component="span" variant="body1" sx={styles.FirstMessageStyles}>
                                            {t("and")}{" "}
                                        </Typography>
                                        <Typography component="span" variant="body1" sx={styles.SecondMessageStyles}>
                                            {t("privacy_policy")}
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </Form>
                </Formik>
            </AuthFormLayout>
        </Box>
    );
};

export default LoginForm;
