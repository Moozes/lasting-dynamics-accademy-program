import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useFormikContext } from "formik";

import { IconButton } from "@mui/material";

import { ArrowLeftIcon, FormikOutlinedTextField, type HTMLDivProps, useTranslationV2 } from "ui";

import { TAddOrganizationValues } from "@app-types/index";

type Props = HTMLDivProps & {
    setCurrentForm: Dispatch<SetStateAction<"add-organization" | "invite-admin">>;
};

export const InviteAdminForm = ({ setCurrentForm, ...props }: Props) => {
    const t = useTranslationV2();
    const isFirstRender = useRef(true);

    const formik = useFormikContext<TAddOrganizationValues>();

    useEffect(() => {
        // go back to add organizaition form if there is an error there
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return; // Skip the effect on the initial render
        }
        const organizationProperties = Object.keys(formik.values).filter((key) => key !== "admin_email");
        // Is there an error in add organization form
        const isErrorInAddOrganizationForm = organizationProperties.some((property) => property in formik.errors);
        if (isErrorInAddOrganizationForm) setCurrentForm("add-organization");
    }, [formik.isSubmitting]);

    return (
        <div {...props}>
            <IconButton className="icon-button" onClick={() => setCurrentForm("add-organization")}>
                <ArrowLeftIcon className="icon" />
            </IconButton>
            <div className="form-title"> {t("invite_admin")} </div>
            <div className="description"> {t("organization_management.invite_admin_form_description")} </div>
            <FormikOutlinedTextField
                id="admin_email"
                name="admin_email"
                label={t("formik.fields.email")}
                className="input"
            />
        </div>
    );
};
