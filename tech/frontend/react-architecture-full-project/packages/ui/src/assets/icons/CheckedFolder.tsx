import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function CheckedFolder(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
            <path
                d="M9 16H3C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H7L10 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V10M13 16L15 18L19 14"
                stroke={theme.color_system.text.light}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
