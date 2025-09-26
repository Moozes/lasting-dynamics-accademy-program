import { SxProps, Theme } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

export const closeIconButtonStyle: SxProps<Theme> = {
    position: "absolute",
    top: 8,
    right: 8,
};

export const dialogBoxStyle: SxProps<Theme> = {
    position: "relative",
    padding: 2,
};

export const contentBoxStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 2,
    gap: 2,
};

export const ulStyle: React.CSSProperties = {
    padding: 0,
    listStyle: "none",
};

export const textAlignCenter: React.CSSProperties = {
    textAlign: "center",
};

export const tooltipStyle: SxProps<Theme> = {
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: (theme) => theme.palette.primary.blue,
        color: (theme) => theme.palette.common.white,
        boxShadow: (theme) => theme.color_system.boxShadow.purple_20,
        fontSize: 16,
        fontWeight: 400,
        padding: 1,
    },
};

export const popoverItemStyles: SxProps<Theme> = (theme) => ({
    padding: "10px 19px",
    ...theme.typography.body1,
    color: theme.color_system.text.secondary,
});
