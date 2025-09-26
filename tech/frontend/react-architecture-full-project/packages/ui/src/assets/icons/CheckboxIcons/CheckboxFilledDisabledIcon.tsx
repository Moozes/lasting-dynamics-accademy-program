import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const CheckboxFilledDisabledIcon = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x={1} y={1} width={22} height={22} rx={5} fill={theme.color_system.background.default} />
            <rect
                x="0.5"
                y="0.5"
                width={23}
                height={23}
                rx="5.5"
                fill={theme.color_system.background.popup}
                stroke={theme.color_system.background.popup}
            />
            <path
                d="M19.6666 8L10.5 17.1667L6.33331 13"
                stroke={theme.color_system.background.default}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CheckboxFilledDisabledIcon;
