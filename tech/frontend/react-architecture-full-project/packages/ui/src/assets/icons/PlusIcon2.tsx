import { SVGProps } from "react";

import { useTheme } from "@mui/material";

export const PlusIcon2 = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M12 5V19"
                stroke={theme.color_system.primary.dark}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 12H19"
                stroke={theme.color_system.primary.dark}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
