import { Dispatch, SetStateAction } from "react";
import { Form, Formik } from "formik";

import { Btn, FormikOutlinedSelect, FormikOutlinedTextField, useTranslationV2 } from "ui";

import { TTaskModel } from "@app-types/index";

import { useEditTaskModelForm } from "./EditTaskModelForm.hooks";

type Props = {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    item: TTaskModel;
    onModalClose: () => void;
};

export const EditTaskModelForm = ({ setModalOpen, item, onModalClose, ...props }: Props) => {
    const t = useTranslationV2();
    const {
        initialValues,
        validationSchema,
        onSubmit,
        isLoading,
        factoryOptions,
        lineOptions,
        workstationOptions,
        handleChange,
    } = useEditTaskModelForm(item, setModalOpen, onModalClose);

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
                                <div className="title">{t("workcycles.edit_model")}</div>
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
                        <FormikOutlinedTextField
                            required
                            className="input"
                            id="name"
                            name="name"
                            label={t("task_model")}
                        />
                    </div>
                    <div className="form-actions">
                        <Btn className="btn" variant="secondary-contained" onClick={() => onModalClose()} type="button">
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
