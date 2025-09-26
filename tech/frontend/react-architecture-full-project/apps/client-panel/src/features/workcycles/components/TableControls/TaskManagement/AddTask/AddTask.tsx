import { Form, Formik } from "formik";

import { Box } from "@mui/material";

import { Btn, Modal, useTranslationV2 } from "ui";

import { modalContentStyles } from "../../inlineStyles";

import { useForms } from "./AddTask.hooks";
import { AddTaskForm } from "./AddTaskForm";

export const AddTask = ({ ...props }) => {
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
        taskModelOptions,
        handleChange,
    } = useForms();

    return (
        <div {...props}>
            <span>
                <Box onClick={() => setModalOpen(true)} className="add-task-button">
                    {t("workcycles.add_task")}
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
                            <AddTaskForm
                                factoryOptions={factoryOptions}
                                lineOptions={lineOptions}
                                workstationsOptions={workstationOptions}
                                taskModelsOptions={taskModelOptions}
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
