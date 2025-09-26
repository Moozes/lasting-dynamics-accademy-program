import { FC } from "react";

import { useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import { useIsPermanentDrawer } from "@features/dashboard/hooks";
import { DrawerProps } from "@features/dashboard/types";

import * as styles from "../../styles";

export const Drawer: FC<DrawerProps> = ({ children, open, ...rest }) => {
    const theme = useTheme();
    const isPermanentDrawer = useIsPermanentDrawer();
    return (
        <MuiDrawer
            variant={isPermanentDrawer ? "permanent" : "temporary"}
            open={open}
            PaperProps={{
                sx: styles.DrawerPaperStyle(theme),
            }}
            sx={styles.DrawerStyle(open)(theme)}
            {...rest}
        >
            {children}
        </MuiDrawer>
    );
};

export default Drawer;
