import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function DoubleCheckMarksIcon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M0.40625 13.41L5.99625 19L7.40625 17.58L1.82625 12M22.2362 5.57996L11.6562 16.17L7.49625 12L6.06625 13.41L11.6562 19L23.6562 6.99996M17.9963 6.99996L16.5863 5.57996L10.2362 11.93L11.6562 13.34L17.9963 6.99996Z"
                fill={theme.color_system.status.infos.light}
            />
        </svg>
    );
}
