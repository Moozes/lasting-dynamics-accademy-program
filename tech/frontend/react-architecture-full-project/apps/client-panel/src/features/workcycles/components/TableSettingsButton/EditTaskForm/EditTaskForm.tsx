import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";
import { Form, Formik } from "formik";

import { Btn, FormikOutlinedSelect, FormikOutlinedTextField, useTranslationV2 } from "ui";

import { TTask } from "@app-types/index";

import { useEditTaskForm } from "./EditTaskForm.hooks";

type Props = {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    row: Row<TTask>;
};

export const EditTaskForm = ({ setModalOpen, row, ...props }: Props) => {
    const t = useTranslationV2();
    const {
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        factoryOptions,
        lineOptions,
        workstationOptions,
        taskModelOptions,
        handleChange,
    } = useEditTaskForm(row, setModalOpen);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            validateOnChange
            validate={(values) => {
                handleChange(values);
            }}
        >
            <Form>
                <div {...props}>
                    <div className="form-content">
                        <div className="form-header">
                            <div className="text">
                                <div className="title">{t("workcycles.edit_task")}</div>
                            </div>
                        </div>
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="factory"
                            name="factory"
                            label={t("factory")}
                            options={factoryOptions}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="line"
                            name="line"
                            label={t("line")}
                            options={lineOptions}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="workstation"
                            name="workstation"
                            label={t("workstation")}
                            options={workstationOptions}
                        />
                        <FormikOutlinedSelect
                            required
                            className="input"
                            id="task_model"
                            name="task_model"
                            label={t("task_model")}
                            options={taskModelOptions}
                        />
                        <FormikOutlinedTextField
                            required
                            className="input"
                            id="duration"
                            name="duration"
                            label={t("Duration")}
                        />
                        <FormikOutlinedTextField required className="input" id="name" name="name" label={t("task")} />
                    </div>
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
                            disabled={isLoading}
                            loading={isLoading}
                        >
                            {t("Save")}
                        </Btn>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};
