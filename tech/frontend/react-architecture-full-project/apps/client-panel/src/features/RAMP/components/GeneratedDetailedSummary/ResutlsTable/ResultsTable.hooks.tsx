import { useTheme } from "@mui/material";

import { RAMPStatusEnum } from "@features/RAMP/types";

export const useGetColorFromStatus = () => {
    const theme = useTheme();
    return {
        getColorFromStatus: (status: RAMPStatusEnum | null) => {
            switch (status) {
                case RAMPStatusEnum.GREEN:
                    return theme.color_system.status.success.light;
                case RAMPStatusEnum.YELLOW:
                    return theme.color_system.status.warning.light;
                case RAMPStatusEnum.RED:
                    return theme.color_system.status.error.light;
                default:
                    return theme.color_system.button.disabled.background;
            }
        },
    };
};
