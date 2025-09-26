import { Box, useTheme } from "@mui/material";

import { Typography } from "ui";

import { OrganizationInfoPrimaryTextStyle, OrganizationInfoSecondaryTextStyle } from "../../inlineStyles";

import { OrganizationDetailItemProps } from "./OrganizationInfoItem.types";

export function OrganizationInfoItem({ title, text }: OrganizationDetailItemProps) {
    const theme = useTheme();
    return (
        <Box sx={{ width: "47%" }}>
            <Typography
                fontFamily="Noto Sans"
                variant="body1"
                sx={OrganizationInfoPrimaryTextStyle}
                color={theme.color_system.text.light}
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                sx={OrganizationInfoSecondaryTextStyle}
                weight="meduim"
                color={theme.color_system.text.primary}
            >
                {text}
            </Typography>
        </Box>
    );
}
