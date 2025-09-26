import { SelectProps } from "@mui/material";

export const selectMenuProps: SelectProps["MenuProps"] = {
    PaperProps: {
        sx: {
            borderRadius: "10px",
            overflow: "auto",
            marginTop: "2px",
            background: (theme) => theme.color_system.divider.white,
            boxShadow: (theme) => theme.color_system.boxShadow.gray,
        },
    },
};
