import { styled } from "@mui/material/styles";

import { TableSettingsButton } from "./TableSettingsButton";

export const StyledTableSettingsButton = styled(TableSettingsButton)(({ theme }) => ({
    "& > .icon-button": {
        "& > .icon path": {
            stroke: theme.color_system.divider.dark_grey,
        },
    },
}));
