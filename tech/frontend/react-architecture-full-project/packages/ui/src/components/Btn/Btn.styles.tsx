import { styled } from "@mui/material/styles";

import { Btn } from "./Btn";

export const StyledBtn = styled(Btn)(({ theme }) => ({
    ...theme.typography.button,
    borderRadius: 8,
    padding: "7.5px 16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    "&.primary-contained": {
        color: theme.color_system.button.enabled.text,
        background: theme.color_system.button.enabled.background,
        border: `2px solid ${theme.color_system.button.enabled.background}`,
    },
    "&.primary-outlined": {
        color: theme.color_system.primary.dark,
        background: "transparent",
        border: `2px solid ${theme.color_system.button.enabled.background}`,
    },
    "&.secondary-contained": {
        color: theme.color_system.primary.dark,
        background: theme.color_system.divider.white,
        border: `2px solid ${theme.color_system.divider.white}`,
        boxShadow: "0px 0px 6px 0px #92929240",
    },
    "&.danger-contained": {
        color: theme.color_system.button.enabled.text,
        background: theme.color_system.status.error.light,
        border: `2px solid ${theme.color_system.status.error.light}`,
    },
    "&.danger-outlined": {
        color: theme.color_system.status.error.light,
        background: "transparent",
        border: `2px solid ${theme.color_system.status.error.light}`,
    },
    "&.text": {
        color: theme.color_system.primary.dark,
        background: "transparent",
        border: "2px solid transparent",
    },
    "&:hover:not(:disabled):not(.loading)": {
        opacity: 0.8,
    },
    "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.5,
        "&.primary-contained": {
            color: theme.color_system.button.enabled.text,
            background: theme.color_system.button.disabled.text,
            border: `2px solid ${theme.color_system.button.disabled.text}`,
        },
        "&.primary-outlined": {
            color: theme.color_system.button.disabled.text,
            border: `2px solid ${theme.color_system.button.disabled.text}`,
            background: "transparent",
        },
        "&.secondary-contained": {
            color: theme.color_system.button.disabled.text,
            boxShadow: "0px 0px 4px 0px #92929240",
            background: theme.color_system.divider.white,
            border: `2px solid ${theme.color_system.divider.white}`,
        },
        "&.danger-contained": {
            color: theme.color_system.button.enabled.text,
            background: theme.color_system.button.disabled.text,
            border: `2px solid ${theme.color_system.button.disabled.text}`,
        },
        "&.danger-outlined": {
            color: theme.color_system.button.disabled.text,
            border: `2px solid ${theme.color_system.button.disabled.text}`,
            background: "transparent",
        },
        "&.text": {
            color: theme.color_system.button.disabled.text,
            background: "transparent",
            border: "2px solid transparent",
        },
    },
    "& > .start-icon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    "& > .text": {
        textAlign: "center",
        display: "flex",
        alignItem: "center",
    },
    "& > .end-icon": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    "& > .circular-progress": {
        color: theme.color_system.button.enabled.background,
    },
}));
