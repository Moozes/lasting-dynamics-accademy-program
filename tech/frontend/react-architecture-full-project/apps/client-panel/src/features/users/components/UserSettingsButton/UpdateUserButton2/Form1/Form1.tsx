import { FormikOutlinedSelect, FormikOutlinedTextField, type HTMLDivProps, UserRoleEnum, useTranslationV2 } from "ui";

import { ISelectedUser } from "@app-types/index";

import { useSelectRoles } from "./Form1.hooks";

type Props = HTMLDivProps & ISelectedUser;

export const Form1 = ({ selectedUser, ...props }: Props) => {
    const t = useTranslationV2();
    const { SELECTROLES, SELECTROLESWORKER } = useSelectRoles();
    const isWorker = selectedUser.role === UserRoleEnum.WORKER;
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
                    options={isWorker ? SELECTROLESWORKER : SELECTROLES}
                    required
                    disabled={isWorker}
                />
                <FormikOutlinedTextField className="input" id="unit" name="unit" type="text" label={t("Unit")} />
            </div>
        </div>
    );
};
