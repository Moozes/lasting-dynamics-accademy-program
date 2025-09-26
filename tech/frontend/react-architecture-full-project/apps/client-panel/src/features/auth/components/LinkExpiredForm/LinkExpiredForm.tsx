import { Form, Formik } from "formik";

import { Stack } from "@mui/material";

import { Btn, FormikOutlinedTextField, Typography, useTranslationV2 } from "ui";

import AuthFormLayout from "@features/auth/components/AuthFormLayout";
import { useSendResetCodeEmail } from "@features/auth/components/InitialPasswordResetForm/PasswordResetForm.hooks";
import * as styles from "@features/auth/components/styles/Forms.style";

import useLinkExpiredForm from "./LinkExpiredForm.hooks";

export const LinkExpiredForm = () => {
    const t = useTranslationV2();
    const { ExpiredLinkInitialValues, ExpiredLinkValidationSchema } = useLinkExpiredForm();
    const { emailSentLoading, sendRestCodeEmail, errorMessage, successMessage } = useSendResetCodeEmail();

    return (
        <AuthFormLayout header={t("auth.link_expired_form.header")} paragraph={t("auth.link_expired_form.paragraph")}>
            <Formik
                onSubmit={(values) => {
                    sendRestCodeEmail(values.email);
                }}
                initialValues={ExpiredLinkInitialValues}
                validationSchema={ExpiredLinkValidationSchema}
            >
                <Form noValidate>
                    <Stack gap={2}>
                        <FormikOutlinedTextField
                            id="email"
                            type="email"
                            name="email"
                            disabled={emailSentLoading}
                            label={t("email")}
                            required
                        />
                        <Btn loading={emailSentLoading} type="submit" variant="primary-contained">
                            {t("auth.link_expired_form.send_new_reset_link")}
                        </Btn>
                        <Typography variant="subtitle2" sx={successMessage ? {} : styles.FirebaseErrorMessage}>
                            {successMessage || errorMessage}
                        </Typography>
                    </Stack>
                </Form>
            </Formik>
        </AuthFormLayout>
    );
};
