import { FC, PropsWithChildren } from "react";

import Box from "@mui/material/Box";

import * as styles from "../../styles";

interface DrawerHeaderProps {}

export const DrawerHeader: FC<PropsWithChildren<DrawerHeaderProps>> = ({ children }) => {
    return (
        <Box alignItems="center" justifyContent="flex-start" sx={styles.DrawerHeaderStyle}>
            {children}
        </Box>
    );
};
