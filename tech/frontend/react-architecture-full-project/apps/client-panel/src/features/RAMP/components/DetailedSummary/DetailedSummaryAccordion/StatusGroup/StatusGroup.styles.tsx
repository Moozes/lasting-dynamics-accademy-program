import { styled } from "@mui/material/styles";

import { StatusGroup } from "./StatusGroup";

export const StyledStatusGroup = styled(StatusGroup)(({ theme }) => ({
    color: theme.color_system.text.primary,
    ...theme.typography.body1,
    display: "flex",
    borderRadius: 30,
    overflow: "hidden",
    width: 116,
    "& > .danger": {
        padding: "5px 0 5px 20px",
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.color_system.status.error.light,
    },
    "& > .medium": {
        padding: "0 0 0 0",
        display: "flex",
        flexGrow: 1,
        background: theme.color_system.status.warning.light,
        "& > .oval": {
            width: 20,
            borderRadius: "0 30px 30px 0",
            background: theme.color_system.status.error.light,
        },
        "& > .value": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            paddingLeft: 5,
        },
    },
    "& > .normal": {
        padding: "0 20px 0 0",
        display: "flex",
        flexGrow: 1,
        background: theme.color_system.status.success.light,
        "& > .oval": {
            width: 20,
            borderRadius: "0 30px 30px 0",
            background: theme.color_system.status.warning.light,
        },
        "& > .value": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            paddingLeft: 5,
        },
    },
}));
