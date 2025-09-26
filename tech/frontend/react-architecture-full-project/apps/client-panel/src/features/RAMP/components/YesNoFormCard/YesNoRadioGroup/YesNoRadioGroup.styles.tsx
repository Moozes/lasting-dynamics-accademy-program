import { styled } from "@mui/material/styles";

import { YesNoRadioGroup } from "./YesNoRadioGroup";

export const StyledYesNoRadioGroup = styled(YesNoRadioGroup)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    "& > .radio-group": {
        display: "flex",
        alignItems: "center",
        gap: 20,
        marginRight: 62,
        "& > label": {
            display: "flex",
            alignItems: "center",
            gap: 21,
            "& > .text": {
                ...theme.typography.caption,
            },
        },
    },
    "& > .statuses": {
        display: "flex",
        marginRight: 62,
        borderRadius: 30,
        overflow: "hidden",
        width: 93,
        "& > .yes-status": {
            padding: "5px 0 5px 20px",
            flexGrow: 1,
            "&.danger": {
                background: theme.color_system.status.error.light,
            },
            "&.medium": {
                background: theme.color_system.status.warning.light,
            },
            "&.normal": {
                background: theme.color_system.status.success.light,
            },
        },
        "& > .no-status": {
            padding: "0 20px 0 0",
            display: "flex",
            flexGrow: 1,
            "&.danger": {
                background: theme.color_system.status.error.light,
            },
            "&.medium": {
                background: theme.color_system.status.warning.light,
            },
            "&.normal": {
                background: theme.color_system.status.success.light,
            },
            "&.disabled": {
                background: theme.color_system.divider.light_grey_20,
            },
            "& > .oval": {
                width: 20,
                borderRadius: "0 30px 30px 0",
                "&.danger": {
                    background: theme.color_system.status.error.light,
                },
                "&.medium": {
                    background: theme.color_system.status.warning.light,
                },
                "&.normal": {
                    background: theme.color_system.status.success.light,
                },
            },
            "& > .value": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 5,
            },
        },
    },
    "& > .icon": {},
}));
