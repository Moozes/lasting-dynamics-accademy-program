import { type HTMLDivProps, URLSearchInput, URLSearchSelect, useTranslationV2 } from "ui";

import { URLOrganizationFilter } from "@components/index";

import { useRoleOptions } from "./TableControls.hooks";

type Props = HTMLDivProps;

export const TableControls = (props: Props) => {
    const t = useTranslationV2();
    const { options: roleOptions } = useRoleOptions();
    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
                <URLSearchSelect
                    label={t("Role")}
                    URLSearchParamName="role_in"
                    options={roleOptions}
                    className="role-input"
                />
                <URLOrganizationFilter />
            </div>
        </div>
    );
};
