import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export const LabelIcon = (props: HTMLSVGProps) => {
    const theme = useTheme();
    return (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g clipPath="url(#clip0_158_251)">
                <path
                    d="M10.4935 2.15508C10.1811 1.8425 9.7572 1.66684 9.31521 1.66675H3.33854C2.89651 1.66675 2.47259 1.84234 2.16003 2.1549C1.84747 2.46746 1.67188 2.89139 1.67188 3.33341V9.31008C1.67197 9.75207 1.84763 10.1759 2.16021 10.4884L9.41354 17.7417C9.7923 18.1181 10.3046 18.3294 10.8385 18.3294C11.3725 18.3294 11.8848 18.1181 12.2635 17.7417L17.7469 12.2584C18.1232 11.8797 18.3345 11.3674 18.3345 10.8334C18.3345 10.2995 18.1232 9.78718 17.7469 9.40841L10.4935 2.15508Z"
                    stroke={theme.color_system.primary.dark}
                    strokeWidth="2.22222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.2526 6.66677C6.48272 6.66677 6.66927 6.48022 6.66927 6.2501C6.66927 6.01998 6.48272 5.83344 6.2526 5.83344C6.02249 5.83344 5.83594 6.01998 5.83594 6.2501C5.83594 6.48022 6.02249 6.66677 6.2526 6.66677Z"
                    fill={theme.color_system.primary.dark}
                    stroke={theme.color_system.primary.dark}
                    strokeWidth="2.22222"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_158_251">
                    <rect width={20} height={20} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
