import { FC } from "react";

import { useTheme } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

import { AppBarProps } from "@features/dashboard/types";

import * as styles from "../styles";

export const AppBar: FC<AppBarProps> = ({ children, open, ...rest }) => {
    const theme = useTheme();
    return (
        <MuiAppBar sx={styles.AppBarStyle(open)(theme)} {...rest}>
            {children}
        </MuiAppBar>
    );
};
