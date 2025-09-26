import { FC } from "react";

import IconButton from "@mui/material/IconButton";

import { CheckedFolder, CheckListIcon, Popover, PopoverItem, usePopover, useTranslationV2 } from "ui";

import { ISelectedUser } from "@app-types/index";
import routes from "@routes/routes";

import { defaultPopoverProps, MenuItemStyles, StyledSettingsIcon } from "./inlineStyles";
import InviteWorkerButton from "./InviteWorkerButton";
import { ShortcutLink } from "./ShortcutLink";

export const WorkProfilesSettingsButton: FC<ISelectedUser> = ({ selectedUser }) => {
    const { anchorEl, onOpen, onClose, open } = usePopover();
    const t = useTranslationV2();
    const selectedUserId = selectedUser.id;
    const finishedSessionsShortcutLink = `${routes.dashboard.sessions}?tab=Finished&worker_id=${selectedUserId}`;
    const assessementShortcutLink = `${routes.dashboard.assessments}?worker_id=${selectedUserId}`;

    return (
        <>
            <IconButton onClick={onOpen}>
                <StyledSettingsIcon />
            </IconButton>
            <Popover
                id={open ? "work-profiles-settings-popover" : undefined}
                open={open}
                anchorEl={anchorEl}
                onClose={onClose}
                {...defaultPopoverProps}
            >
                <PopoverItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                    <ShortcutLink
                        Icon={CheckedFolder}
                        text={t("sessions_management.finished_sessions")}
                        to={finishedSessionsShortcutLink}
                    />
                </PopoverItem>
                <PopoverItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(true)}>
                    <ShortcutLink
                        Icon={CheckListIcon}
                        text={t("assessments.assessments")}
                        to={assessementShortcutLink}
                    />
                </PopoverItem>
                <PopoverItem onKeyDown={(e) => e.stopPropagation()} sx={MenuItemStyles(false)}>
                    <InviteWorkerButton selectedUser={selectedUser} />
                </PopoverItem>
            </Popover>
        </>
    );
};
