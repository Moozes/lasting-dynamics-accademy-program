import { styled } from "@mui/material/styles";

import { VersionHistoryDialog } from "./VersionHistoryDialog";

export const StyledVersionHistoryDialog = styled(VersionHistoryDialog)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ".MuiDialog-paper": {
        background: theme.color_system.divider.white,
        boxShadow: theme.color_system.boxShadow.gray,
        position: "relative",
        borderRadius: 10,
        width: 600,
        "& > .close-icon": {
            color: theme.color_system.divider.dark_grey,
            position: "absolute",
            padding: 0,
            top: 11,
            right: 10,
        },
        "& > .content": {
            padding: "9px 12px 0",
            "& > .version-container": {
                borderBottom: `1px solid ${theme.color_system.divider.light_grey}`,
                padding: "17px 19px",
                "&:last-child": {
                    borderBottom: 0,
                },
                "& > .version-date-container": {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 6,
                    "& > .version": {
                        marginRight: 12,
                        ...theme.typography.subtitle2,
                    },
                    "& > .date": {
                        display: "list-item",
                        listStylePosition: "inside",
                        ...theme.typography.caption,
                        color: theme.color_system.text.light,
                    },
                },
                "& > .updates": {
                    margin: 0,
                    padding: 0,
                    li: {
                        listStylePosition: "inside",
                        ...theme.typography.caption,
                        color: theme.color_system.text.secondary,
                        marginBotom: 4,
                    },
                },
            },
        },
    },
}));
