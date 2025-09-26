import { Dispatch, SetStateAction } from "react";
import { Row } from "react-table";

import { AnyObjectWithId, ArchiveIcon2, Btn, type HTMLDivProps, useTranslationV2 } from "ui";

import { useArchiveOrganizationsMutation } from "./ArchiveOrganizations.hooks";

type Props = HTMLDivProps & {
    setModalOpen: Dispatch<SetStateAction<boolean>>;
    selectedRows: Row<AnyObjectWithId>[];
    setSelectedRows: Dispatch<SetStateAction<Row<AnyObjectWithId>[]>>;
    archive: boolean;
};

export const ArchiveOrganizations = ({ setModalOpen, selectedRows, setSelectedRows, archive, ...props }: Props) => {
    const t = useTranslationV2();
    const { mutate: archiveOrganization } = useArchiveOrganizationsMutation(selectedRows, setSelectedRows, archive);

    const handleArchive = () => {
        archiveOrganization();
        setModalOpen(false);
    };

    return (
        <div {...props}>
            <div className="content">
                <ArchiveIcon2 className="icon" />
                <div className="title">
                    {archive
                        ? t("organization_management.confirm_archive_action")
                        : t("organization_management.confirm_unarchive_action")}
                </div>
                <div className="description">
                    {archive
                        ? t("organization_management.organization_archive_description")
                        : t("organization_management.organization_unarchive_description")}
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
                <Btn className="button archive" variant="primary-contained" onClick={handleArchive}>
                    {archive ? t("archive") : t("unarchive")}
                </Btn>
            </div>
        </div>
    );
};
