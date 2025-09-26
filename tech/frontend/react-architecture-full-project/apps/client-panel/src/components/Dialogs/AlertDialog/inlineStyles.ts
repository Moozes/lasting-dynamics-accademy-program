import { SxProps, Theme } from "@mui/material";

export const DialogStyle: SxProps = { "& .MuiDialog-paper": { maxWidth: "575px" } };
export const DialogStyle2: SxProps<Theme> = (theme) => ({
    "& .MuiDialog-paper": { maxWidth: "575px", background: theme.color_system.divider.white },
});
export const DialogTitleStyle: SxProps = { display: "flex", flexGrow: 1, justifyContent: "flex-end", p: 0 };
export const cancelButtonStyle: SxProps = { mr: 1, bgcolor: "common.white", borderColor: "common.white" };
export const DialogActionsStyle: SxProps<Theme> = {
    padding: "0 15px 20px 20px",
};

export const IconButtonStyle: SxProps<Theme> = {
    p: 0,
    mr: "9px",
    mt: "7px",
};
