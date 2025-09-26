import { FC, ReactNode } from "react";

import Box from "@mui/material/Box";

import { Typography } from "ui";

interface ChartCardTitleProps {
    title: ReactNode;
}

export const ChartCardTitle: FC<ChartCardTitleProps> = ({ title }) => {
    return (
        <Box py={3} px={5}>
            <Typography
                variant="h4"
                color={(theme) => theme.color_system.text.primary}
                sx={{
                    "&::first-letter": {
                        textTransform: "uppercase",
                    },
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};
