import { type HTMLDivProps, URLSearchInput, URLSearchSelect, useTranslationV2 } from "ui";

import { IDeleteMultipleUsersButton } from "@features/users/types";

import { AddNewUserButton2 } from "./AddNewUserButton2";
import DeleteMultipleUsersButton from "./DeleteMultipleUsersButton";
import { useRoleOptions, useStatusOptions } from "./TableControls.hooks";

type Props = HTMLDivProps & IDeleteMultipleUsersButton;

export const TableControls = ({ selectedRows, ...props }: Props) => {
    const t = useTranslationV2();
    const { options: roleOptions } = useRoleOptions();
    const { options: statusOptions } = useStatusOptions();
    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" inputProps={{ placeholder: t("search_by_name") }} />
                <URLSearchSelect
                    label={t("Role")}
                    URLSearchParamName="role__in"
                    options={roleOptions}
                    className="role-input"
                />
                <URLSearchSelect
                    label={t("status")}
                    URLSearchParamName="is_active"
                    options={statusOptions}
                    className="status-input"
                />
            </div>
            <div className="buttons">
                <AddNewUserButton2 className="add-new" />
                <DeleteMultipleUsersButton className="delete-multiple" selectedRows={selectedRows} />
            </div>
        </div>
    );
};
