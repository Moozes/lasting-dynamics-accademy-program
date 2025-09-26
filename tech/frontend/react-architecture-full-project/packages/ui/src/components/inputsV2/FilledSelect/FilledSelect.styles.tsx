// select inherits from outlined input classes
import { outlinedInputClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { FilledSelect } from "./FilledSelect";

export const StyledFilledSelect = styled(FilledSelect)(({ theme }) => ({
    "&.disabled:hover *": {
        cursor: "not-allowed",
    },
    "& > label": {
        ...theme.typography.h6,
        color: theme.color_system.text.primary,
        display: "block",
        marginBottom: 3,
        "&.disabled": {
            color: theme.color_system.divider.light_grey,
            "& > .star": {
                color: theme.color_system.divider.light_grey,
            },
        },
        "& > .star": {
            color: theme.color_system.status.error.dark,
        },
    },
    [`& > .${outlinedInputClasses.root}`]: {
        background: theme.color_system.divider.light_grey,
        borderRadius: 8,
        [`&.${outlinedInputClasses.focused}`]: {
            "& > fieldset": {
                border: `1px solid ${theme.color_system.divider.light_grey}`,
                borderRadius: 8,
            },
        },
        "&.error": {
            "& > fieldset": {
                border: `1px solid ${theme.color_system.status.error.light}`,
            },
        },
        "&.disabled": {
            background: `${theme.color_system.divider.light_grey}33`,
            [`& > .${outlinedInputClasses.input}`]: {
                color: theme.color_system.divider.light_grey,
                WebkitTextFillColor: theme.color_system.divider.light_grey,
            },
            "& > fieldset, &:hover > fieldset": {
                border: `1px solid ${theme.color_system.divider.light_grey}33`,
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
                border: `1px solid ${theme.color_system.divider.light_grey}`,
            },
        },
        [`& > .${outlinedInputClasses.input}`]: {
            ...theme.typography.body1,
            color: theme.color_system.text.secondary,
            padding: "10px 15px",
        },
        "& > fieldset": {
            border: `1px solid ${theme.color_system.divider.light_grey}`,
            borderRadius: 8,
            padding: 0,
        },
    },
    "& > .input-error": {},
}));
