import { Box, useTheme } from "@mui/material";

import { Typography, useTranslationV2 } from "ui";

import { BatteryLevelEnum } from "@app-types/index";

type Props = {
    value: BatteryLevelEnum | number | null;
};

export const BatteryIcon = ({ value }: Props) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const LOW_BATTERY_WIDTH = "40%";
    const HIGH_BATTERY_WIDTH = "90%";
    let batteryBgColor;
    let batteryText = "";
    let batteryWidth = "";
    if (typeof value == "number") {
        if (value >= 50) {
            batteryText = t("ok");
            batteryBgColor = theme.color_system.status.success.light;
            batteryWidth = HIGH_BATTERY_WIDTH;
        } else {
            batteryText = t("low");
            batteryBgColor = theme.color_system.status.error.light;
            batteryWidth = LOW_BATTERY_WIDTH;
        }
    } else if (typeof value == "string") {
        if (value == BatteryLevelEnum.OK || value == BatteryLevelEnum.BATTERY_OK) {
            batteryText = t("ok");
            batteryBgColor = theme.color_system.status.success.light;
            batteryWidth = HIGH_BATTERY_WIDTH;
        } else if (value == BatteryLevelEnum.LOW || value == BatteryLevelEnum.BATTERY_LOW) {
            batteryText = t("low");
            batteryBgColor = theme.color_system.status.error.light;
            batteryWidth = LOW_BATTERY_WIDTH;
        }
    } else {
        batteryText = "null";
        batteryWidth = "0%";
    }
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Box
                width="30px"
                height="18px"
                borderRadius="5px"
                border="2.7px solid"
                borderColor={theme.color_system.text.secondary}
                overflow="hidden"
            >
                <Box position="relative" top={0} left={0} width={batteryWidth} height="100%" bgcolor={batteryBgColor}>
                    <Typography ml={0.5} fontSize="9px" weight="meduim" color={theme.color_system.text.primary}>
                        {batteryText}
                    </Typography>
                </Box>
            </Box>
            <Box
                border="2.3px solid"
                borderColor={theme.color_system.text.secondary}
                height="6px"
                ml={0.5}
                width={0}
                borderRadius="5px"
            />
        </Box>
    );
};
