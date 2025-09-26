import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";

import { Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { TOrganization } from "@app-types/index";

import { useActivateOrganizationMutation } from "./ActivateOrganization.hooks";

type Props = HTMLDivProps & {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    row: Row<TOrganization>;
};

export const ActivateOrganization = ({ setModalOpen, row, ...props }: Props) => {
    const t = useTranslationV2();
    const { mutate: activateOrganization } = useActivateOrganizationMutation(row);

    const handleActivate = () => {
        activateOrganization();
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <div className="content">
                <div className="title">
                    {row.original.is_active
                        ? t("organization_management.confirm_deactivate_action")
                        : t("organization_management.confirm_activate_action")}
                </div>
                <div className="description">
                    {row.original.is_active
                        ? t("organization_management.organization_deactivate_description")
                        : t("organization_management.organization_activate_description")}
                </div>
            </div>
            <div className="buttons">
                <Btn
                    className="button cancel"
                    variant="secondary-contained"
                    onClick={() => setModalOpen(false)}
                    type="button"
                >
                    {t("Cancel")}
                </Btn>
                <Btn className="button archive" variant="primary-contained" onClick={handleActivate}>
                    {row.original.is_active ? t("deactivate") : t("activate")}
                </Btn>
            </div>
        </div>
    );
};
