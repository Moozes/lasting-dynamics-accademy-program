import { SVGProps } from "react";

import { useTheme } from "@mui/material";

export default function CommentIcon(props: SVGProps<SVGSVGElement>) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
            <circle cx={15} cy={15} r={15} fill={theme.color_system.divider.light_grey_20} />
            <path
                d="M21.993 10.4C21.993 9.63 21.37 9 20.6 9H9.4C8.63 9 8 9.63 8 10.4V18.8C8 19.57 8.63 20.2 9.4 20.2H19.2L22 23L21.993 10.4ZM20.6 10.4V19.619L19.781 18.8H9.4V10.4H20.6ZM10.8 16H19.2V17.4H10.8V16ZM10.8 13.9H19.2V15.3H10.8V13.9ZM10.8 11.8H19.2V13.2H10.8V11.8Z"
                fill={theme.color_system.divider.dark_grey}
            />
        </svg>
    );
}
