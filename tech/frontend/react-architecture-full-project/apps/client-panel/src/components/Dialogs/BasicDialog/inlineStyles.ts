import { SxProps, Theme } from "@mui/material";

export const DialogStyle: SxProps = { "& .MuiDialog-paper": { maxWidth: "780px", minWidth: "650px" } };
export const DialogStyle2: SxProps<Theme> = (theme) => ({
    "& .MuiDialog-paper": { maxWidth: "780px", minWidth: "650px", background: theme.color_system.divider.white },
});
export const DialogTitleStyle: SxProps = { display: "flex", flexGrow: 1, justifyContent: "space-between", ml: 2 };
export const titleStyle: SxProps = { fontSize: "24px" };
export const titleStyle2: SxProps<Theme> = {
    color: (theme) => theme.color_system.text.primary,
};
export const DialogeActionsStyle: SxProps = {
    bgcolor: "primary.blueFade",
    display: "flex",
    justifyContent: "space-between",
    py: 2,
    px: 4.5,
};
