import { useState } from "react";
import { Form, Formik } from "formik";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { AiEngineSettings } from "./AiEngineSettings";
import { useForm } from "./SettingsModal2.hooks";
import { Sidebar } from "./Sidebar";

type Props = HTMLDivProps & {
    onClose: () => void;
};

export const SettingsModal2 = ({ onClose, ...props }: Props) => {
    const t = useTranslationV2();
    const [tab, setTab] = useState(0);

    const { initialValues, validationSchema, handleSubmit, isUpdating } = useForm(onClose, setTab);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ dirty }) => (
                <Form>
                    <div {...props}>
                        <div className="content">
                            <Sidebar className="sidebar" tab={tab} setTab={setTab} />
                            <div className="screens">{tab === 0 && <AiEngineSettings />}</div>
                        </div>
                        <div className="actions">
                            <Btn variant="secondary-contained" type="button" onClick={onClose}>
                                {t("Cancel")}
                            </Btn>
                            <Btn variant="primary-contained" type="submit" disabled={!dirty || isUpdating}>
                                {t("Save Changes")}
                            </Btn>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
