import { SxProps, Theme } from "@mui/material";

export const cardStyle: SxProps<Theme> = {
    borderRadius: "10px",
    boxShadow: (theme) => theme.color_system.boxShadow.gray,
    padding: "20px",
    marginBottom: "20px",
    width: "700px",
};

export const typographyStyle: SxProps<Theme> = {
    marginBottom: "20px",
    fontWeight: "bold",
};
