import { styled } from "@mui/material/styles";

import { VersionHistoryButton } from "./VersionHistoryButton";

export const StyledVersionHistoryButton = styled(VersionHistoryButton)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    paddingBottom: 20,
    "& > .version-string": {
        color: theme.color_system.text.light,
        paddingBottom: 1,
        borderBottom: `1px solid ${theme.color_system.text.light}`,
        display: "inline-block",
        ...theme.typography.caption,
        lineHeight: "normal",
        "&:hover": {
            cursor: "pointer",
        },
    },
}));
