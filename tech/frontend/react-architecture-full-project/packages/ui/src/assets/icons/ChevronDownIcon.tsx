import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function ChevronDownIcon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" {...props}>
            <path
                d="M3.90625 4.5L6.90625 7.5L9.90625 4.5"
                stroke={theme.color_system.text.light}
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
