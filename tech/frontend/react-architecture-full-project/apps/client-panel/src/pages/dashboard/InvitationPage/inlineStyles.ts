import { SxProps, Theme } from "@mui/material";

export const AvatarStyle: SxProps<Theme> = (theme) => ({
    bgcolor: theme.color_system.primary.light_35,
    color: theme.color_system.primary.dark,
    borderRadius: 1,
});
