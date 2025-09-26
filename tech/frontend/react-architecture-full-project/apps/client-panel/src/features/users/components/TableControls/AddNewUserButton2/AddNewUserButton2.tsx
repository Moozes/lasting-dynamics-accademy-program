import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, type HTMLDivProps, Modal, UserRoleEnum, useTranslationV2 } from "ui";

import { Actions } from "./Actions";
import { useForm } from "./AddNewUserButton2.hooks";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { contentStyles } from "./inlineStyles";

type Props = HTMLDivProps;

export const AddNewUserButton2 = (props: Props) => {
    const t = useTranslationV2();
    const { open, setOpen, initialValues, currentForm, setCurrentForm, validate, handleSubmit, isAddUserLoading } =
        useForm();
    return (
        <div {...props}>
            <Btn onClick={() => setOpen(true)} variant="primary-contained">
                {t("users_management.add_new_user.add_new_user_button")}
            </Btn>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {({ values, isValidating }) => {
                        const submitButtonText =
                            values.role === UserRoleEnum.WORKER && currentForm === 1
                                ? t("Next")
                                : t("users_management.add_new_user.add_new_user_button");
                        return (
                            <Form>
                                <Box sx={contentStyles}>
                                    <div className="content">
                                        <div className="title">{t("users_management.add_new_user.add_new_user")}</div>
                                        {currentForm === 1 ? <Form1 /> : <Form2 />}
                                    </div>
                                    <Actions
                                        currentForm={currentForm}
                                        setCurrentForm={setCurrentForm}
                                        setOpen={setOpen}
                                        submitButtonText={submitButtonText}
                                        isAddUserLoading={isAddUserLoading}
                                        isValidating={isValidating}
                                    />
                                </Box>
                            </Form>
                        );
                    }}
                </Formik>
            </Modal>
        </div>
    );
};
