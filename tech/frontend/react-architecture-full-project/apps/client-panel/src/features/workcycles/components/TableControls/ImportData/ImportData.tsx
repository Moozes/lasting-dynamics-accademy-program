import { useState } from "react";
import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, type HTMLDivProps, Modal, Popover, QuestionCircleIcon, usePopover, useTranslationV2 } from "ui";

import { modalContentStyles } from "../inlineStyles";

import { ConfirmationDialog } from "./ConfirmationDialog";
import { ErrorDialog } from "./ErrorDialog";
import { useImportDataForm } from "./ImportData.hooks";
import { ImportDataForm } from "./ImportDataForm";
import { ImportGuide } from "./ImportGuide";

type Props = HTMLDivProps;

export const ImportData = (props: Props) => {
    const t = useTranslationV2();
    const [modalOpen, setModalOpen] = useState(false);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [formValues, setFormValues] = useState<any>(null);
    const { onClose, onOpen, open, anchorEl } = usePopover();

    const { initialValues, validationSchema, toNext, onConfirm, handleBtnClick, handleFileChange, fileInputRef } =
        useImportDataForm(setModalOpen, setConfirmationModalOpen, setErrorModalOpen, setFormValues);

    const handleRetry = () => {
        setErrorModalOpen(false);
        handleBtnClick();
    };

    return (
        <div {...props}>
            <input
                type="file"
                accept=".xlsx,.xls"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div className="container">
                <Btn className="first-button" onClick={handleBtnClick}>
                    {t("workcycles.import_data")}
                </Btn>
                <Btn className="second-button" onClick={onOpen}>
                    <QuestionCircleIcon />
                </Btn>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => toNext(values)}
                >
                    <Form>
                        <Box sx={modalContentStyles}>
                            <ImportDataForm toNext={toNext} setModalOpen={setModalOpen} />
                        </Box>
                    </Form>
                </Formik>
            </Modal>
            {formValues && (
                <ConfirmationDialog
                    confirmationModalOpen={confirmationModalOpen}
                    setConfirmationModalOpen={setConfirmationModalOpen}
                    onConfirm={() => onConfirm(formValues)}
                    importType={formValues.import_type}
                />
            )}
            <ErrorDialog errorModalOpen={errorModalOpen} setErrorModalOpen={setErrorModalOpen} onRetry={handleRetry} />
            <Popover open={open} onClose={onClose} anchorEl={anchorEl}>
                <ImportGuide />
            </Popover>
        </div>
    );
};
