import { menuItemClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

import { MenuItem } from "./MenuItem";

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.color_system.text.secondary,
    ...theme.typography.h6,
    padding: "13px 12px 12px 12px",
    "&:hover": {
        background: theme.color_system.divider.light_grey,
        [`&.${menuItemClasses.selected}`]: {
            background: theme.color_system.divider.light_grey,
        },
    },
    [`&.${menuItemClasses.selected}`]: {
        background: theme.color_system.divider.light_grey,
    },
}));
