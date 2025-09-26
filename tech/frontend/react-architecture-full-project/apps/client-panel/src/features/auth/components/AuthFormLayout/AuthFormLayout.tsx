import { Box } from "@mui/material";

import { Typography } from "ui";

import { useAuthBreakpoint } from "@features/auth/hooks";

import { AuthFormLayoutProps } from "./AuthFormLayout.types";
import * as styles from "./inlineStyles";

export const AuthFormLayout = ({ header, paragraph, children }: AuthFormLayoutProps) => {
    const { tabletBreakpoint } = useAuthBreakpoint();
    return (
        <Box width="80%">
            <Typography variant="h4">{header}</Typography>
            {paragraph && (
                <Typography variant={tabletBreakpoint ? "body2" : "body1"} sx={styles.AuthFormLayoutParagraph}>
                    {paragraph}
                </Typography>
            )}
            <Box sx={styles.AuthFormLayoutChildrenBox}>{children}</Box>
        </Box>
    );
};
