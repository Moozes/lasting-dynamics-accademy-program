import { SxProps, Theme } from "@mui/material/styles";

export const popoverStyles: SxProps<Theme> = (theme) => ({
    marginTop: "8px",

    padding: "14px 7px",
    ...theme.typography.body1,
    color: theme.color_system.text.secondary,
    cursor: "pointer",
    "&:hover": {
        color: theme.color_system.text.primary,
    },
    marginLeft: "25px",
});

export const popoverContentStyles: SxProps<Theme> = (theme) => ({
    border: `1px solid ${theme.color_system.divider.light_grey}`,
    width: "420px",
    top: "90%",
    "& > .option-item": {
        height: "50px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "15px",
        width: "100%",
        "&:hover": {
            background: `${theme.color_system.divider.light_grey_20}`,
        },
    },
});
