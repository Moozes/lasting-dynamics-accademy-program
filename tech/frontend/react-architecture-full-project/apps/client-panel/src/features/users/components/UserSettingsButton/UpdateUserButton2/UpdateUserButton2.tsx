import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { type HTMLDivProps, Modal, useTranslationV2 } from "ui";
import { UserEdit } from "ui/src/assets/icons/UserEdit";

import { IHandleMenuClose, ISelectedUser } from "@app-types/index";

import { Actions } from "./Actions";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { contentStyles } from "./inlineStyles";
import { useForm } from "./UpdateUserButton2.hooks";

type Props = HTMLDivProps & ISelectedUser & IHandleMenuClose;

export const UpdateUserButton2 = ({ selectedUser, handleMenuClose, ...props }: Props) => {
    const t = useTranslationV2();
    const {
        currentForm,
        initialValues,
        open,
        setOpen,
        setCurrentForm,
        validationSchema,
        closeMenuAndModal,
        isUpdateUserLoading,
        handleSubmit,
    } = useForm(selectedUser, handleMenuClose);
    return (
        <>
            <div {...props} role="button" onClick={() => setOpen(true)}>
                <UserEdit />
                <div className="text">{t("users_management.update_delete_single_user.edit_user")}</div>
            </div>
            <Modal open={open} onClose={closeMenuAndModal}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange={false}
                >
                    {() => {
                        return (
                            <Form>
                                <Box sx={contentStyles}>
                                    <div className="content">
                                        <div className="title">{t("Edit")}</div>
                                        {currentForm === 1 ? <Form1 selectedUser={selectedUser} /> : <Form2 />}
                                    </div>
                                    <Actions
                                        currentForm={currentForm}
                                        setCurrentForm={setCurrentForm}
                                        closeMenuAndModal={closeMenuAndModal}
                                        selectedUser={selectedUser}
                                        isUpdateUserLoading={isUpdateUserLoading}
                                    />
                                </Box>
                            </Form>
                        );
                    }}
                </Formik>
            </Modal>
        </>
    );
};
