import { styled } from "@mui/material/styles";

import { ArchiveOrganizations } from "./ArchiveOrganizations";

export const StyledArchiveOrganizations = styled(ArchiveOrganizations)(({ theme }) => ({
    color: theme.color_system.text.primary,
    width: 575,
    background: theme.color_system.divider.white,
    "& > .content": {
        textAlign: "center",
        padding: "21px 77px 26px",
        "& > .icon": {
            marginBottom: 28,
        },
        "& > .title": {
            ...theme.typography.h4,
            color: theme.color_system.primary.dark,
            marginBottom: 26,
        },
        "& > .description": {
            ...theme.typography.body1,
            color: theme.color_system.text.primary,
        },
    },
    "& > .buttons": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 15,
        padding: "0 19px 22px",
        "& > .button": {
            borderRadius: 5,
            "&.cancel": {
                padding: 8,
            },
            "&.archive": {
                padding: "8px 12px",
            },
        },
    },
}));
