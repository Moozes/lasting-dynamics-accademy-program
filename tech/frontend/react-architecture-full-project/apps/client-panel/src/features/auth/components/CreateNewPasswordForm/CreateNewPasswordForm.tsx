import { useState } from "react";
import { Form, Formik } from "formik";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Stack, useTheme } from "@mui/material";

import { Btn, FormikOutlinedTextField, Typography, useTranslationV2 } from "ui";

import AuthFormLayout from "@features/auth/components/AuthFormLayout";

import { useCreateNewPasswordForm, useFirebaseResetPassword } from "./CreateNewPasswordForm.hooks";

export const CreateNewPasswordForm = () => {
    const t = useTranslationV2();
    const theme = useTheme();
    const { CreateNewPasswordFormInitialValues, CreateNewPasswordFormValidationSchema } = useCreateNewPasswordForm();
    const { errorMessage, passwordResetLoading, resetPassword } = useFirebaseResetPassword();

    const [isPassword, setIsPassword] = useState(true);
    const toggleIsPassword = () => setIsPassword((prev) => !prev);

    return (
        <AuthFormLayout
            header={t("auth.create_new_password_form.header")}
            paragraph={t("auth.create_new_password_form.paragraph")}
        >
            <Formik
                onSubmit={resetPassword}
                initialValues={CreateNewPasswordFormInitialValues}
                validationSchema={CreateNewPasswordFormValidationSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form>
                    <Stack gap={2}>
                        <FormikOutlinedTextField
                            id="password"
                            name="password"
                            label={t("password")}
                            type={isPassword ? "password" : "text"}
                            disabled={passwordResetLoading}
                            required
                            endAdornment={
                                <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                    {isPassword ? (
                                        <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                    ) : (
                                        <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                    )}
                                </IconButton>
                            }
                        />
                        <FormikOutlinedTextField
                            id="password confirmation"
                            name="password confirmation"
                            label={t("confirm_password")}
                            type={isPassword ? "password" : "text"}
                            disabled={passwordResetLoading}
                            required
                            endAdornment={
                                <IconButton onClick={toggleIsPassword} sx={{ padding: 0 }}>
                                    {isPassword ? (
                                        <Visibility sx={{ color: theme.color_system.divider.light_grey }} />
                                    ) : (
                                        <VisibilityOff sx={{ color: theme.color_system.divider.light_grey }} />
                                    )}
                                </IconButton>
                            }
                        />
                        <Btn loading={passwordResetLoading} type="submit" variant="primary-contained">
                            {t("auth.create_new_password_form.reset_my_password")}
                        </Btn>
                        <Typography>{errorMessage}</Typography>
                    </Stack>
                </Form>
            </Formik>
        </AuthFormLayout>
    );
};
