import { Dispatch, SetStateAction } from "react";
import { Form, Formik } from "formik";

import { Btn, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

import { TFactory } from "@app-types/index";

import { useEditFactoryForm } from "./EditFactoryForm.hooks";

type Props = HTMLDivProps & {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    item: TFactory;
    onModalClose: () => void;
};

export const EditFactoryForm = ({ setModalOpen, item, onModalClose, ...props }: Props) => {
    const t = useTranslationV2();
    const { initialValues, validationSchema, onSubmit, isLoading } = useEditFactoryForm(
        item,
        setModalOpen,
        onModalClose
    );

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            <Form>
                <div {...props}>
                    <div className="form-content">
                        <div className="form-header">
                            <div className="text">
                                <div className="title">{t("workcycles.edit_factory")}</div>
                            </div>
                        </div>
                        <FormikOutlinedTextField
                            required
                            className="input"
                            id="name"
                            name="name"
                            label={t("factory")}
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
