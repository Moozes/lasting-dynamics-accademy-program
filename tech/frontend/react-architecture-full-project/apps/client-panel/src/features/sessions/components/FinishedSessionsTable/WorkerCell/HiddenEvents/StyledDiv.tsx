import { styled } from "@mui/material/styles";

export const StyledDiv = styled("div")(({ theme }) => ({
    color: theme.color_system.text.secondary,
    borderRadius: 8,
    background: theme.color_system.divider.white,
    boxShadow: theme.color_system.boxShadow.purple_20,
    "& > .event": {
        ...theme.typography.body1,
        padding: "9px 18px",
        minWidth: 131,
        borderBottom: `1px solid ${theme.color_system.divider.light_grey_20}`,
        "&:last-of-type": {
            borderBottom: "none",
        },
        "&._0": {
            color: theme.color_system.status.warning.dark,
            "& svg": {
                color: theme.color_system.status.warning.dark,
            },
        },
        "&._1": {
            color: theme.color_system.status.error.light,
            "& svg": {
                color: theme.color_system.status.error.light,
            },
        },
        "&._2": {
            color: theme.color_system.text.light,
            "& svg": {
                color: theme.color_system.text.light,
            },
        },
        "&._3": {
            color: theme.color_system.status.success.dark,
            "& svg": {
                color: theme.color_system.status.success.dark,
            },
        },
    },
}));
