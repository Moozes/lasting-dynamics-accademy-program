import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, Modal, useTranslationV2 } from "ui";

import { modalContentStyles } from "../../inlineStyles";

import { useForms } from "./AddWorkstation.hooks";
import { AddWorkstationForm } from "./AddWorkstationForm";

export const AddWorkstation = ({ ...props }) => {
    const t = useTranslationV2();
    const {
        modalOpen,
        setModalOpen,
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        lineOptions,
        factoryOptions,
        handleChange,
    } = useForms();

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="add-workstation-button">
                    {t("workcycles.add_workstation")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validate={(values) => {
                        handleChange(values);
                    }}
                >
                    <Form>
                        <Box sx={modalContentStyles}>
                            <AddWorkstationForm factoryOptions={factoryOptions} lineOptions={lineOptions} />
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
