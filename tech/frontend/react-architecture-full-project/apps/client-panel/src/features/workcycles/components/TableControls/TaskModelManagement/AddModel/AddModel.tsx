import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, Modal, useTranslationV2 } from "ui";

import { modalContentStyles } from "../../inlineStyles";

import { useForms } from "./addModel.hooks";
import { AddModelForm } from "./AddModelForm";

export const AddModel = ({ ...props }) => {
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
        workstationOptions,
        handleChange,
    } = useForms();

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="add-model-button">
                    {t("workcycles.add_model")}
                </Box>
            </span>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validate={(values) => handleChange(values)}
                >
                    <Form>
                        <Box sx={modalContentStyles}>
                            <AddModelForm
                                factoryOptions={factoryOptions}
                                lineOptions={lineOptions}
                                workstationsOptions={workstationOptions}
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
