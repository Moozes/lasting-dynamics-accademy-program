import { useAtomValue } from "jotai";
import { truncate } from "lodash";

import { KeyboardArrowDown } from "@mui/icons-material";
import { CircularProgress, Divider, PopoverProps } from "@mui/material";

import { type HTMLDivProps, Popover, PopoverItem, usePopover } from "ui";

import { authAtom } from "@atoms/index";
import { useGetUserOrganizationsQuery } from "@features/dashboard/queries";
import { getTwoInitialsAtMost } from "@utils/index";

import { popoverItemStyles } from "./inlineStyles";
import { useUpdateActiveOrganization } from "./UserOrganizationsDropDown.hooks";

type Props = HTMLDivProps;

const popoverPosition: {
    anchorOrigin: PopoverProps["anchorOrigin"];
    transformOrigin: PopoverProps["transformOrigin"];
} = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "left",
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "left",
    },
};

export const UserOrganizationsDropDown = (props: Props) => {
    const auth = useAtomValue(authAtom);
    const { onOpen, ...rest } = usePopover();
    const { data: userOrganizations } = useGetUserOrganizationsQuery();
    const organizationName = auth.wergonicUser?.organization?.name;
    const organizationTruncatedName = truncate(organizationName, { length: 11, omission: ".." });
    const organizationInitials = getTwoInitialsAtMost(organizationName);

    const { updateActiveOrganization, updateActiveOrganizationIsLoading } = useUpdateActiveOrganization();

    const handleItemClick = (id: number) => {
        updateActiveOrganization(id);
        rest.onClose();
    };

    return (
        <>
            <div {...props}>
                <div className="organization-button-container">
                    <div className="organization-button" role="button" onClick={onOpen} title={organizationName}>
                        {updateActiveOrganizationIsLoading ? (
                            <CircularProgress size="30px" className="circular-progress" />
                        ) : (
                            <div className="initials">{organizationInitials}</div>
                        )}
                        <div className="name">{organizationTruncatedName}</div>
                        <div className="empty" />
                        <KeyboardArrowDown className="icon" />
                    </div>
                </div>
                <Divider className="divider" />
            </div>
            <Popover {...rest} {...popoverPosition}>
                {userOrganizations?.data.results.map((elm) => (
                    <PopoverItem
                        key={elm.organization_id}
                        sx={popoverItemStyles}
                        onClick={() => handleItemClick(elm.organization_id)}
                    >
                        <div className="initials">{getTwoInitialsAtMost(elm.organization_name)}</div>
                        <div className="name">{elm.organization_name}</div>
                    </PopoverItem>
                ))}
            </Popover>
        </>
    );
};
