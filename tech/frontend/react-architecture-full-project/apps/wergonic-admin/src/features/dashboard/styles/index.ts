import { styled } from "@mui/material/styles";

import { SettingsIcon2 } from "ui";

export const StyledSettingsIcon2 = styled(SettingsIcon2)(({ theme }) => ({
    path: {
        stroke: theme.color_system.divider.dark_grey,
    },
}));
