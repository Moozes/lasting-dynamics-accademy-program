import { Form, Formik } from "formik";

import { Stack } from "@mui/material";

import { Btn, FormikOutlinedTextField, useTranslationV2 } from "ui";

import AuthFormLayout from "@features/auth/components/AuthFormLayout";

import { usePasswordResetForm, useSendResetCodeEmail } from "./PasswordResetForm.hooks";

export const InitialPasswordResetForm = () => {
    const t = useTranslationV2();
    const { PasswordResetInitialValues, PasswordResetValidationSchema } = usePasswordResetForm();
    const { emailSentLoading, sendRestCodeEmail } = useSendResetCodeEmail();

    return (
        <AuthFormLayout
            header={t("auth.init_reset_password.header")}
            paragraph={t("auth.init_reset_password.paragraph")}
        >
            <Formik
                onSubmit={(values) => {
                    sendRestCodeEmail(values.email);
                }}
                initialValues={PasswordResetInitialValues}
                validationSchema={PasswordResetValidationSchema}
                validateOnBlur={false}
                validateOnChange={false}
            >
                <Form noValidate>
                    <Stack gap={2}>
                        <FormikOutlinedTextField
                            id="email"
                            type="email"
                            disabled={emailSentLoading}
                            name="email"
                            label={t("email")}
                            required
                        />
                        <Btn loading={emailSentLoading} type="submit" variant="primary-contained">
                            {t("auth.init_reset_password.send_reset_link")}
                        </Btn>
                    </Stack>
                </Form>
            </Formik>
        </AuthFormLayout>
    );
};
