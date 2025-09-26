import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, Modal, useTranslationV2 } from "ui";

import { modalContentStyles } from "../../inlineStyles";

import { useForms } from "./AddLine.hooks";
import { AddLineForm } from "./AddLineForm";

export const AddLine = ({ ...props }) => {
    const t = useTranslationV2();
    const { modalOpen, setModalOpen, initialValues, validationSchema, onSubmit, isLoading, factoryOptions } =
        useForms();

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="add-line-button">
                    {t("workcycles.add_line")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form>
                        <Box sx={modalContentStyles}>
                            <AddLineForm factoryOptions={factoryOptions} />
                            <div className="form-actions">
                                <Btn
                                    className="btn"
                                    variant="secondary-contained"
                                    onClick={() => setModalOpen(false)}
                                    type="button"
                                >
                                    {t("Cancel")}
                                </Btn>
                                <Btn className="btn" variant="primary-contained" type="submit" disabled={isLoading}>
                                    {t("Save")}
                                </Btn>
                            </div>
                        </Box>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};
