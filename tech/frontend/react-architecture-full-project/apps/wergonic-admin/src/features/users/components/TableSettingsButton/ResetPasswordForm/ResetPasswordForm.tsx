import { Dispatch, SetStateAction } from "react";
import { Form, Formik } from "formik";

import { Btn, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

import { useResetPasswordForm } from "./ResetPasswordForm.hooks";

type Props = HTMLDivProps & {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    email: string;
};

export const ResetPasswordForm = ({ setModalOpen, email, ...props }: Props) => {
    const t = useTranslationV2();
    const { initialValues, validationSchema, onSubmit, isLoading } = useResetPasswordForm(setModalOpen, email);

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div {...props}>
                    <div className="reset-password-form">
                        <div className="text">
                            <div className="title">{t("reset_password")}</div>
                            <div className="description">{t("admin_management.reset_password_instructions")}</div>
                        </div>
                        <FormikOutlinedTextField id="email" name="email" label={t("email")} className="email-input" />
                        <Btn type="submit" variant="primary-contained" className="submit-btn" disabled={isLoading}>
                            {isLoading ? t("loading") : t("send")}
                        </Btn>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
