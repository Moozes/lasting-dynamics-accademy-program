import { SxProps, Theme } from "@mui/material";

export const organizationNameStyles: SxProps<Theme> = (theme) => ({
    ...theme.typography.h4,
    [theme.breakpoints.down("lg")]: {
        ...theme.typography.h6,
    },
});

export const organizationIdStyles: SxProps<Theme> = (theme) => ({
    fontFamily: { sm: theme.typography.caption.fontFamily, lg: theme.typography.h6.fontFamily },
    ...theme.typography.h6,
    [theme.breakpoints.down("lg")]: {
        ...theme.typography.caption,
    },
});

export const organizationDetailsStyles: SxProps<Theme> = (theme) => ({
    fontFamily: { sm: theme.typography.body1.fontFamily, lg: theme.typography.h6.fontFamily },
    ...theme.typography.h6,
    [theme.breakpoints.down("lg")]: {
        ...theme.typography.body1,
    },
});
