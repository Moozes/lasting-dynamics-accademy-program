import { Theme } from "@mui/material";

// export const LIGHT_THEME_COLORS = ["#16D1F4", "#670DD6", "#03003D"];
export const LIGHT_THEME_COLORS = ["red", "yellow", "green"];

export const getChartColors = (theme: Theme) => {
    return [
        theme.color_system.status.warning.light,
        theme.color_system.primary.dark,
        theme.color_system.status.infos.light,
        theme.color_system.status.error.light,
        theme.color_system.status.success.light,
        theme.color_system.primary.light,
    ];
};
