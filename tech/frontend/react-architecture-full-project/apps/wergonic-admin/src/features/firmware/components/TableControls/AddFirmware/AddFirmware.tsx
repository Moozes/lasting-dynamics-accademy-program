import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, type HTMLDivProps, Modal, UploadIconOutlined, useTranslationV2 } from "ui";

import { useForms } from "./AddFirmware.hooks";
import { AddFirmwareForm } from "./AddFirmwareForm";
import { modalContentStyles } from "./inlineStyles";

type Props = HTMLDivProps;

export const AddFirmware = (props: Props) => {
    const t = useTranslationV2();
    const {
        modalOpen,
        setModalOpen,
        initialValues,
        validationSchema,
        onSubmit,
        isMutationLoading,
        fileInputChangeHandler,
        selectedFile,
    } = useForms();

    return (
        <div {...props}>
            <Btn className="add-button" endIcon={<UploadIconOutlined />} onClick={() => setModalOpen(true)}>
                {t("firmware_management.upload_firmware")}
            </Btn>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <Box sx={modalContentStyles}>
                            <AddFirmwareForm
                                fileInputChangeHandler={fileInputChangeHandler}
                                selectedFileName={selectedFile?.name}
                            />
                            <div className="form-actions">
                                <Btn
                                    className="btn"
                                    variant="secondary-contained"
                                    onClick={() => setModalOpen(false)}
                                    type="button"
                                >
                                    {t("Cancel")}
                                </Btn>
                                <Btn
                                    className="btn"
                                    variant="primary-contained"
                                    type="submit"
                                    disabled={isMutationLoading}
                                >
                                    {t("firmware_management.upload")}
                                </Btn>
                            </div>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};
