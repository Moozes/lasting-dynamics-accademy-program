import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const CheckboxIndertminateIcon = (props: SVGProps<SVGSVGElement>) => {
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
                stroke={theme.color_system.primary.dark}
                strokeOpacity="0.4"
            />
            <path
                d="M19.6666 8L10.5 17.1667L6.33331 13"
                stroke={theme.color_system.background.default}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 13.998H7C6.73478 13.998 6.48043 13.8926 6.29289 13.7051C6.10536 13.5176 6 13.2632 6 12.998C6 12.7328 6.10536 12.4784 6.29289 12.2909C6.48043 12.1034 6.73478 11.998 7 11.998H19C19.2652 11.998 19.5196 12.1034 19.7071 12.2909C19.8946 12.4784 20 12.7328 20 12.998C20 13.2632 19.8946 13.5176 19.7071 13.7051C19.5196 13.8926 19.2652 13.998 19 13.998Z"
                fill={theme.color_system.primary.dark}
                fillOpacity="0.4"
            />
        </svg>
    );
};

export default CheckboxIndertminateIcon;
