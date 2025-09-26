import { useTheme } from "@mui/material";

import { MECStatusEnum } from "@features/MEC/types";

export const useGetColorFromStatus = () => {
    const theme = useTheme();
    return {
        getColorFromStatus: (status: MECStatusEnum | null) => {
            switch (status) {
                case MECStatusEnum.GREEN:
                    return theme.color_system.status.success.light;
                case MECStatusEnum.YELLOW:
                    return theme.color_system.status.warning.light;
                case MECStatusEnum.RED:
                    return theme.color_system.status.error.light;
                default:
                    return theme.color_system.button.disabled.background;
            }
        },
    };
};
