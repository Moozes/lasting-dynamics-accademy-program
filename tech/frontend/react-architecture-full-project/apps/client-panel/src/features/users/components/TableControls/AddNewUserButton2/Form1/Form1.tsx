import { useFormikContext } from "formik";

import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, UserRoleEnum, useTranslationV2 } from "ui";

import { IAddNewUser } from "@features/users/types";
import { useSelectRoles } from "@hooks/index";

import { AlertMessage } from "../AlertMessage";

type Props = HTMLDivProps;

export const Form1 = (props: Props) => {
    const t = useTranslationV2();
    const { SELECTROLES } = useSelectRoles();
    const { values } = useFormikContext<IAddNewUser>();
    return (
        <div {...props}>
            <div className="flex-container">
                <FormikOutlinedTextField
                    className="input"
                    id="first_name"
                    name="first_name"
                    type="text"
                    label={t("First Name")}
                    required
                />
                <FormikOutlinedTextField
                    className="input"
                    id="last_name"
                    name="last_name"
                    type="text"
                    label={t("Last Name")}
                    required
                />
            </div>
            <div className="flex-container">
                <FormikOutlinedTextField
                    className="input"
                    id="personal_number"
                    name="personal_number"
                    type="text"
                    label={t("Phone_number")}
                />
                <FormikOutlinedTextField
                    className="input"
                    id="email"
                    name="email"
                    type="text"
                    label={t("email")}
                    required
                />
            </div>
            <div className="flex-container">
                <FormikOutlinedSelect
                    className="input"
                    id="role"
                    name="role"
                    label={t("Role")}
                    options={SELECTROLES}
                    required
                />
                <FormikOutlinedTextField className="input" id="unit" name="unit" type="text" label={t("Unit")} />
            </div>

            {values.role !== UserRoleEnum.WORKER && <AlertMessage />}
        </div>
    );
};
