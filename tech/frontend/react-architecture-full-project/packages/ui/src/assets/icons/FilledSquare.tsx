import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function FilledSquare(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" {...props}>
            <path d="M0 12V0H12V12H0Z" fill={theme.color_system.primary.dark} />
        </svg>
    );
}
