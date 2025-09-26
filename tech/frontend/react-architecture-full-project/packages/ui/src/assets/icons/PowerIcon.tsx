import { SVGProps } from "react";

import { useTheme } from "@mui/material";

export const PowerIcon = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
            <path
                d="M13.7701 4.98004C14.7139 5.92413 15.3565 7.12687 15.6168 8.43618C15.8771 9.7455 15.7433 11.1026 15.2323 12.3359C14.7214 13.5691 13.8562 14.6232 12.7462 15.3648C11.6362 16.1064 10.3313 16.5022 8.99634 16.5022C7.66141 16.5022 6.35646 16.1064 5.24647 15.3648C4.13649 14.6232 3.27132 13.5691 2.76037 12.3359C2.24941 11.1026 2.11561 9.7455 2.37588 8.43618C2.63615 7.12687 3.27881 5.92413 4.22259 4.98004"
                stroke={theme.color_system.primary.dark}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 1.5V9"
                stroke={theme.color_system.primary.dark}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
