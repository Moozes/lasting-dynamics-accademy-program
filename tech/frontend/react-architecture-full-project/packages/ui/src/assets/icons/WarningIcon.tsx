import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function WarningIcon(props: HTMLSVGProps) {
    const theme = useTheme();

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={94} height={94} viewBox="0 0 94 94" fill="none" {...props}>
            <circle opacity="0.1" cx="47" cy="47" r="47" fill={theme.color_system.status.warning.light || "#FDE837"} />
            <path
                d="M44.15 33.4366L30.0334 57.0033C29.7423 57.5073 29.5883 58.0788 29.5867 58.6608C29.5851 59.2428 29.7359 59.8152 30.0241 60.3208C30.3123 60.8265 30.7279 61.2479 31.2295 61.543C31.7312 61.8382 32.3014 61.9969 32.8834 62.0033H61.1167C61.6987 61.9969 62.2689 61.8382 62.7705 61.543C63.2722 61.2479 63.6878 60.8265 63.976 60.3208C64.2642 59.8152 64.415 59.2428 64.4134 58.6608C64.4118 58.0788 64.2578 57.5073 63.9667 57.0033L49.85 33.4366C49.5529 32.9468 49.1346 32.5418 48.6354 32.2607C48.1361 31.9797 47.5729 31.832 47 31.832C46.4271 31.832 45.8639 31.9797 45.3647 32.2607C44.8655 32.5418 44.4472 32.9468 44.15 33.4366V33.4366Z"
                stroke={theme.color_system.status.warning.dark}
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M47 42V48.6667"
                stroke={theme.color_system.status.warning.dark}
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M47 55.332H47.0167"
                stroke={theme.color_system.status.warning.dark}
                strokeWidth="3.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
