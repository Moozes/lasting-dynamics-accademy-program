import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function ExclamationHexagon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
            <path
                d="M12.2502 7.75V13M21.3302 8.58V15.42C21.3302 16.54 20.7302 17.58 19.7602 18.15L13.8202 21.58C12.8502 22.14 11.6502 22.14 10.6702 21.58L4.73016 18.15C4.25193 17.8727 3.85509 17.4745 3.57951 16.9953C3.30392 16.5161 3.1593 15.9728 3.16016 15.42V8.58C3.16016 7.46 3.76016 6.42 4.73016 5.85L10.6702 2.42C11.6402 1.86 12.8402 1.86 13.8202 2.42L19.7602 5.85C20.7302 6.42 21.3302 7.45 21.3302 8.58Z"
                stroke={theme.color_system.status.error.light}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.25 16.1992V16.2992"
                stroke={theme.color_system.status.error.light}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
