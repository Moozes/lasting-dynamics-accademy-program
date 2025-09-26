import { Form, Formik } from "formik";

import { Box, Stack } from "@mui/material";

import { Btn, FormikOutlinedTextField, Typography, useTranslationV2, WergonicLogoPurple } from "ui";

import { Link } from "@components/index";
import AuthFormLayout from "@features/auth/components/AuthFormLayout";
import * as styles from "@features/auth/components/styles/Forms.style";
import routes from "@routes/routes";

import { useEmailLoginForm, useEmailSignIn } from "./useLoginForm.hooks";

export const EmailLoginForm = () => {
    const t = useTranslationV2();
    const { loginInitialValues, loginValidationSchema } = useEmailLoginForm();
    const { isLoading, emailSignIn } = useEmailSignIn();

    return (
        <Box sx={styles.ContainerStyle}>
            <WergonicLogoPurple />
            <Box marginTop={2} marginLeft="10%" alignSelf="start">
                <Typography variant="h4">{t("stay_connected")}!,</Typography>
            </Box>
            <AuthFormLayout header={t("auth.login.Magic_Link_Title")}>
                <Formik
                    onSubmit={(values) => emailSignIn(values)}
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    <Form noValidate>
                        <Stack gap={2}>
                            <FormikOutlinedTextField
                                id="email"
                                type="email"
                                name="email"
                                disabled={isLoading}
                                label={t("email")}
                                required
                            />
                            <Box display="flex" justifyContent="flex-end">
                                <Typography variant="body2" weight="bold">
                                    <Link to={routes.auth.login} sx={styles.passwordLoginLink}>
                                        {t("auth.login.password_login")}
                                    </Link>
                                </Typography>
                            </Box>

                            <Btn loading={isLoading} type="submit" variant="primary-contained">
                                {t("Send")}
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

export default EmailLoginForm;
