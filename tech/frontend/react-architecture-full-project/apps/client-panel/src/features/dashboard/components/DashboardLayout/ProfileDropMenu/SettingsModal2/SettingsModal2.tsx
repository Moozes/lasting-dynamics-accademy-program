import { useState } from "react";
import { Form, Formik } from "formik";
import { useAtom } from "jotai";
import { useSnackbar } from "notistack";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { authAtom } from "@atoms/index";
import { useUpdateUserMutation } from "@features/dashboard/queries";

import { AccountScreen } from "./AccountScreen";
import { DisplayPreferencesScreen } from "./DisplayPreferencesScreen";
import OrganizationScreen from "./OrganizationScreen";
import { SecurityScreen } from "./SecurtyScreen";
import { useSettingsModal2Form } from "./SettingsModal2.hook";
import { Sidebar } from "./Sidebar";

type Props = HTMLDivProps & {
    onClose: () => void;
};

export const SettingsModal2 = ({ onClose, ...props }: Props) => {
    const t = useTranslationV2();
    const [tab, setTab] = useState(0);
    const [auth, setAuth] = useAtom(authAtom);
    const { enqueueSnackbar } = useSnackbar();
    const { initialValues, validationSchema } = useSettingsModal2Form();

    const {
        mutate: updateUser,
        isLoading,
        reset,
    } = useUpdateUserMutation({
        onSuccess: async (response) => {
            enqueueSnackbar(t("users_management.update_delete_single_user.user_update_success"));
            setAuth({ ...auth, wergonicUser: response.data.user });
            reset();
        },
        onError: (err) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
        },
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(values) => updateUser(values)}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ dirty }) => (
                <Form>
                    <div {...props}>
                        <div className="content">
                            <Sidebar className="sidebar" tab={tab} setTab={setTab} />
                            <div className="screens">
                                {tab === 0 && <OrganizationScreen />}
                                {tab === 1 && <AccountScreen />}
                                {tab === 2 && <SecurityScreen />}
                                {tab === 3 && <DisplayPreferencesScreen />}
                            </div>
                        </div>
                        <div className="actions">
                            <Btn variant="secondary-contained" type="button" onClick={onClose}>
                                {t("Cancel")}
                            </Btn>
                            <Btn variant="primary-contained" type="submit" disabled={!dirty || isLoading}>
                                {t("Save Changes")}
                            </Btn>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
