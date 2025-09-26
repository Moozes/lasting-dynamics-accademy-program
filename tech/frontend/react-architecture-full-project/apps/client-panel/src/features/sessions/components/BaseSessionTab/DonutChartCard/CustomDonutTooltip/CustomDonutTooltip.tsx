import { FC } from "react";
import { PieTooltipProps } from "@nivo/pie";
import { intervalToDuration } from "date-fns";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import { Typography, useTranslationV2 } from "ui";

import { zeroPad } from "@utils/index";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomDonutTooltip: FC<PieTooltipProps<any>> = ({ datum: { data } }) => {
    const theme = useTheme();
    const t = useTranslationV2();
    const duration = intervalToDuration({ start: 0, end: data.duration });
    const formatedDuration = `${zeroPad(duration.hours!)}:${zeroPad(duration.minutes!)}:${zeroPad(duration.seconds!)}`;
    return (
        <Box
            p={2}
            sx={{
                bgcolor: theme.color_system.divider.white,
                boxShadow: theme.color_system.boxShadow.purple_20,
                borderRadius: 2,
            }}
        >
            <Typography variant="body1" sx={{ fontWeight: 600 }} color={theme.color_system.text.primary}>
                {t("Duration")}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600 }} color={theme.color_system.text.primary}>
                {formatedDuration}
            </Typography>
        </Box>
    );
};
