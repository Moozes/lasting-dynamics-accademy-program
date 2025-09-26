import { SVGProps } from "react";

import { useTheme } from "@mui/material";

export default function PencilIcon(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
            <circle
                cx="8.5"
                cy="8.5"
                r="8"
                fill={theme.color_system.divider.white}
                stroke={theme.color_system.divider.light_grey}
            />
            <path
                d="M9.11118 5.63888L11.3616 7.88927L6.47495 12.7759L4.46855 12.9974C4.19995 13.0271 3.97301 12.8 4.0029 12.5314L4.22614 10.5236L9.11118 5.63888ZM12.7534 5.30383L11.6968 4.2472C11.3672 3.9176 10.8326 3.9176 10.503 4.2472L9.50898 5.24126L11.7594 7.49164L12.7534 6.49758C13.083 6.16781 13.083 5.63343 12.7534 5.30383Z"
                fill={theme.color_system.divider.dark_grey}
            />
        </svg>
    );
}
