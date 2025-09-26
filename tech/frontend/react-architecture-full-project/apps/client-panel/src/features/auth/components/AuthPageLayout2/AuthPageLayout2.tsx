import { Box } from "@mui/material";

import { useAuthBreakpoint } from "@features/auth/hooks";

import { AuthPageLayout2Props } from "./AuthPageLayout2.types";
import * as styles from "./inlineStyles";

export const AuthPageLayout2 = ({ form }: AuthPageLayout2Props) => {
    const { tabletBreakpoint } = useAuthBreakpoint();
    return (
        <Box minHeight="100vh" display="flex">
            {!tabletBreakpoint && <Box sx={styles.SphereStyle} />}
            <Box
                flexGrow={1}
                flexBasis={tabletBreakpoint ? "100%" : "50%"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {form}
            </Box>
        </Box>
    );
};

export default AuthPageLayout2;
