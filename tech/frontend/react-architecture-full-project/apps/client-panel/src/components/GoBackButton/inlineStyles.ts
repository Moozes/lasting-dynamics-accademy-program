import { SxProps, Theme } from "@mui/material";

export const GoBackButtonStyle: SxProps<Theme> = {
    color: (theme) => theme.color_system.primary.dark,
    paddingLeft: "6px",
    paddingRight: "6px",
    marginBottom: "10px",
};

export const GoBackIconStyle: SxProps<Theme> = {
    color: (theme) => theme.color_system.primary.dark,
};
