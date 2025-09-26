import { Box, Typography } from "@mui/material";

import { useAuthBreakpoint } from "@features/auth/hooks";

import { AuthPageLayoutProps } from "./AuthPageLayout.types";
import * as styles from "./inlineStyles";

export const AuthPageLayout = ({
    TopMessage,
    footer,
    rightSideAsset,
    rightSideBgColor,
    form,
    leftSideAsset,
}: AuthPageLayoutProps) => {
    const { tabletBreakpoint } = useAuthBreakpoint();
    return (
        <Box minHeight="100vh" display="flex">
            <Box
                flexGrow={1}
                flexBasis={tabletBreakpoint ? "100%" : "50%"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    width={tabletBreakpoint ? "553px" : "100%"}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        sx={styles.AuthPageLayoutLeftSide}
                        justifyContent="center"
                    >
                        <Box
                            display="flex"
                            pb="1.5rem"
                            pt="1.5rem"
                            alignSelf={tabletBreakpoint ? "center" : "flex-start"}
                        >
                            {leftSideAsset}
                        </Box>
                        {TopMessage && <Typography variant={tabletBreakpoint ? "h4" : "h2"}>{TopMessage}</Typography>}
                        {form}
                        {footer}
                    </Box>
                </Box>
            </Box>
            <Box
                flexBasis="50%"
                flexGrow={1}
                sx={{ background: rightSideBgColor }}
                display={tabletBreakpoint ? "none" : "flex"}
                justifyContent="center"
                alignItems="center"
            >
                {rightSideAsset}
            </Box>
        </Box>
    );
};

export default AuthPageLayout;
