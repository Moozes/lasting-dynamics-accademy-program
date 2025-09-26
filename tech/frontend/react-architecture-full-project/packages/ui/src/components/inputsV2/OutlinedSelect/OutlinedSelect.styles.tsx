// select inherits from outlined input classes
import { outlinedInputClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { OutlinedSelect } from "./OutlinedSelect";

export const StyledOutlinedSelect = styled(OutlinedSelect)(({ theme }) => ({
    "&.disabled:hover *": {
        cursor: "not-allowed",
    },
    "& > label": {
        ...theme.typography.h6,
        color: theme.color_system.text.primary,
        display: "block",
        marginBottom: 3,
        "&.disabled": {
            color: theme.color_system.button.disabled.text,
            "& > .star": {
                color: theme.color_system.button.disabled.text,
            },
        },
        "& > .star": {
            color: theme.color_system.status.error.dark,
        },
    },
    [`& > .${outlinedInputClasses.root}`]: {
        [`&.${outlinedInputClasses.focused}`]: {
            "& > fieldset": {
                border: `1px solid ${theme.color_system.divider.dark_grey}`,
                borderRadius: 8,
            },
        },
        "&.error": {
            "& > fieldset": {
                border: `1px solid ${theme.color_system.status.error.light}`,
            },
        },
        "&.disabled": {
            [`& > .${outlinedInputClasses.input}`]: {
                color: theme.color_system.button.disabled.text,
                WebkitTextFillColor: theme.color_system.button.disabled.text,
            },
            "& > fieldset, &:hover > fieldset": {
                border: `1px solid ${theme.color_system.button.disabled.text}`,
            },
        },
        [`&.${outlinedInputClasses.adornedStart}`]: {
            paddingLeft: 15,
            [`& > .${outlinedInputClasses.input}`]: {
                padding: "10px 15px 10px 0",
            },
        },
        [`&.${outlinedInputClasses.adornedEnd}`]: {
            paddingRight: 15,
            [`& > .${outlinedInputClasses.input}`]: {
                padding: "10px 0 10px 15px",
            },
        },
        [`&.${outlinedInputClasses.adornedStart}.${outlinedInputClasses.adornedEnd}`]: {
            [`& > .${outlinedInputClasses.input}`]: {
                padding: "10px 0 10px 0",
            },
        },
        "&:hover": {
            "& > fieldset": {
                border: `1px solid ${theme.color_system.divider.dark_grey}`,
            },
        },
        [`& > .${outlinedInputClasses.input}`]: {
            ...theme.typography.body1,
            color: theme.color_system.text.secondary,
            padding: "10px 15px",
        },
        "& > fieldset": {
            border: `1px solid ${theme.color_system.divider.dark_grey}`,
            borderRadius: 8,
            padding: 0,
        },
    },
    "& > .input-error": {},
}));
