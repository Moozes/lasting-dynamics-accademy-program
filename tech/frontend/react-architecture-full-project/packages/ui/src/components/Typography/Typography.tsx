import React, { useMemo } from "react";

import { useTheme } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

import { ITypographyProps } from "./Typography.app";

const Typography: React.FC<ITypographyProps> = ({ children, weight, variant, className, sx, ...rest }) => {
    const theme = useTheme();

    const weights = useMemo(
        () => ({
            regular: theme.typography.fontWeightRegular,
            meduim: theme.typography.fontWeightMedium,
            bold: theme.typography.fontWeightBold,
        }),
        [theme]
    );
    const weightStyle = weight ? weights[weight] : undefined;

    return (
        <MuiTypography
            sx={{
                fontWeight: weightStyle,
                ...sx,
            }}
            className={className}
            variant={variant}
            {...rest}
        >
            {children}
        </MuiTypography>
    );
};

export default Typography;
