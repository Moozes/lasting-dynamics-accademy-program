import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function TrendingUpIcon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.473 11.1955L24.1079 12.8304L18.5673 18.371L14.832 14.6357C14.6199 14.4231 14.3319 14.3036 14.0316 14.3036C13.7313 14.3036 13.4433 14.4231 13.2312 14.6357L6.41901 21.4592C5.97622 21.9019 5.97622 22.6172 6.41901 23.06C6.8618 23.5028 7.57707 23.5028 8.01986 23.06L14.0259 17.0426L17.7612 20.7779C18.204 21.2207 18.9193 21.2207 19.3621 20.7779L25.7087 14.4426L27.3437 16.0776C27.6956 16.4295 28.3087 16.1797 28.3087 15.6802V10.7981C28.3201 10.4802 28.0703 10.2305 27.7524 10.2305H22.8817C22.3708 10.2305 22.121 10.8436 22.473 11.1955Z"
                fill={theme.color_system.status.success.light}
            />
        </svg>
    );
}
