import { Theme } from "@mui/material";

export const getStatusCircleColor = (rowIdx: number, theme: Theme) => {
    let statusColor = "";
    switch (rowIdx) {
        case 0:
            statusColor = theme.color_system.status.success.dark;
            break;
        case 1:
            statusColor = theme.color_system.status.warning.dark;
            break;
        case 2:
            statusColor = theme.color_system.status.error.dark;
            break;
        default:
            statusColor = "black";
    }
    return statusColor;
};
