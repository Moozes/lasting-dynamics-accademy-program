import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const CheckboxIcon = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect
                x="0.5"
                y="0.5"
                width={23}
                height={23}
                rx="5.5"
                fill={theme.color_system.background.default}
                stroke={theme.color_system.primary.dark}
            />
        </svg>
    );
};

export default CheckboxIcon;
