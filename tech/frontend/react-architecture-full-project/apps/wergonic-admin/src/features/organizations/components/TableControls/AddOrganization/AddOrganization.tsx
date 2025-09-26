import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, type HTMLDivProps, Modal, PlusIcon, useTranslationV2 } from "ui";

import { useForms } from "./AddOrganization.hooks";
import { AddOrganizationForm } from "./AddOrganizationForm";
import { modalContentStyles } from "./inlineStyles";
import { InviteAdminForm } from "./InviteAdminForm";

type Props = HTMLDivProps;

export const AddOrganization = (props: Props) => {
    const t = useTranslationV2();
    const {
        modalOpen,
        setModalOpen,
        initialValues,
        ValidationSchema,
        onSubmit,
        isMutationLoading,
        avatarPreview,
        fileInputChangeHandler,
        currentForm,
        setCurrentForm,
    } = useForms();
    return (
        <div {...props}>
            <Btn className="add-button" endIcon={<PlusIcon />} onClick={() => setModalOpen(true)}>
                {t("add_organization")}
            </Btn>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={ValidationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <Box sx={modalContentStyles}>
                            {currentForm == "add-organization" && (
                                <AddOrganizationForm
                                    avatarPreview={avatarPreview}
                                    fileInputChangeHandler={fileInputChangeHandler}
                                />
                            )}
                            {currentForm == "invite-admin" && <InviteAdminForm setCurrentForm={setCurrentForm} />}
                            <div className="form-actions">
                                <Btn
                                    className="btn"
                                    variant="secondary-contained"
                                    onClick={() => setModalOpen(false)}
                                    type="button"
                                >
                                    {t("Cancel")}
                                </Btn>
                                {currentForm == "add-organization" && (
                                    <Btn
                                        className="btn"
                                        variant="primary-contained"
                                        type="button"
                                        onClick={() => setCurrentForm("invite-admin")}
                                    >
                                        {t("Next")}
                                    </Btn>
                                )}
                                {currentForm == "invite-admin" && (
                                    <Btn
                                        className="btn"
                                        variant="primary-contained"
                                        type="submit"
                                        disabled={isMutationLoading}
                                    >
                                        {t("send")}
                                    </Btn>
                                )}
                            </div>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};
