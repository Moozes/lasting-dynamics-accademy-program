import { Dispatch, SetStateAction, useState } from "react";
import { Row } from "react-table";

import { IconButton } from "@mui/material";

import {
    AnyObjectWithId,
    type HTMLDivProps,
    Modal,
    Popover,
    PopoverItem,
    SettingsIcon,
    URLSearchInput,
    URLSearchSelect,
    usePopover,
    useTranslationV2,
} from "ui";

import { DateRangeFilter } from "@components/index";
import { COUNTRIES_SELECT_OPTIONS } from "@utils/index";

import { AddOrganization } from "./AddOrganization";
import { ArchiveOrganizations } from "./ArchiveOrganization";
import { popoverItemStyles } from "./inlineStyles";
import { useIsActiveOptions } from "./TableControls.hooks";

type Props = HTMLDivProps & {
    selectedRows: Row<AnyObjectWithId>[];
    setSelectedRows: Dispatch<SetStateAction<Row<AnyObjectWithId>[]>>;
    archive: boolean;
};

export const TableControls = ({ selectedRows, setSelectedRows, archive, ...props }: Props) => {
    const t = useTranslationV2();
    const { onOpen, ...rest } = usePopover();
    const [archiveModalOpen, setArchiveModalOpen] = useState(false);

    const IS_ACTIVE_OPTIONS = useIsActiveOptions();

    const openArchiveModalHandler = () => {
        rest.onClose();
        setArchiveModalOpen(true);
    };

    return (
        <div {...props}>
            <div className="inputs">
                <URLSearchInput className="search-input" />
                <URLSearchSelect
                    label={t("status")}
                    URLSearchParamName="is_active"
                    options={IS_ACTIVE_OPTIONS}
                    className="is-active-input"
                />
                <URLSearchSelect
                    label={t("country")}
                    URLSearchParamName="country"
                    options={COUNTRIES_SELECT_OPTIONS}
                    className="country-input"
                />
                <DateRangeFilter paramName="license_expiration_range" />
            </div>
            <div className="buttons">
                <IconButton className="icon-button" onClick={onOpen}>
                    <SettingsIcon className="icon" />
                </IconButton>
                <Popover {...rest}>
                    <PopoverItem
                        className="border-bottom"
                        sx={popoverItemStyles}
                        onClick={openArchiveModalHandler}
                        disabled={selectedRows.length === 0}
                    >
                        {archive ? t("archive") : t("unarchive")}
                    </PopoverItem>
                </Popover>
                <AddOrganization className="add-organization" />
            </div>
            <Modal open={archiveModalOpen} onClose={() => setArchiveModalOpen(false)}>
                <ArchiveOrganizations
                    selectedRows={selectedRows}
                    setSelectedRows={setSelectedRows}
                    archive={archive}
                    setModalOpen={setArchiveModalOpen}
                />
            </Modal>
        </div>
    );
};
