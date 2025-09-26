import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function CircledCheckedFolderIcon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
            <circle cx={20} cy={20} r={20} fill={theme.color_system.accent.purple} />
            <path
                d="M19 27H13C12.4696 27 11.9609 26.7893 11.5858 26.4142C11.2107 26.0391 11 25.5304 11 25V14C11 13.4696 11.2107 12.9609 11.5858 12.5858C11.9609 12.2107 12.4696 12 13 12H17L20 15H27C27.5304 15 28.0391 15.2107 28.4142 15.5858C28.7893 15.9609 29 16.4696 29 17V21M23 27L25 29L29 25"
                stroke={theme.color_system.primary.dark}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
