import { FC, PropsWithChildren, ReactNode } from "react";

import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Typography } from "ui";

import * as styles from "../styles";

interface IDashboardInnerLayout {
    header: string;
    pageActions?: ReactNode;
    goBackButton?: ReactNode;
}

export const DashboardInnerLayout: FC<PropsWithChildren<IDashboardInnerLayout>> = ({
    children,
    header,
    pageActions,
    goBackButton,
}) => {
    const theme = useTheme();

    return (
        <Container sx={styles.DashboardInnerContainerStyle}>
            {goBackButton && <Box>{goBackButton}</Box>}
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 3 }}>
                <Typography variant="h4" color={theme.color_system.text.primary}>
                    {header}
                </Typography>
                {pageActions && <Box>{pageActions}</Box>}
            </Box>
            {children}
        </Container>
    );
};
