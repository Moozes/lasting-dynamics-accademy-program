import { useTheme } from "@mui/material";

import { HTMLSVGProps } from "../../types/global";

export default function TrendingDownIcon(props: HTMLSVGProps) {
    const theme = useTheme();
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.473 22.931L24.1079 21.296L18.5673 15.7555L14.832 19.4908C14.3892 19.9336 13.6739 19.9336 13.2311 19.4908L6.41899 12.6673C6.20639 12.4552 6.08691 12.1672 6.08691 11.8669C6.08691 11.5666 6.20639 11.2786 6.41899 11.0665C6.86178 10.6237 7.57705 10.6237 8.01984 11.0665L14.0259 17.0839L17.7612 13.3485C18.204 12.9057 18.9193 12.9057 19.3621 13.3485L25.7087 19.6838L27.3436 18.0489C27.6956 17.697 28.3087 17.9467 28.3087 18.4463V23.317C28.3087 23.6349 28.0589 23.8847 27.741 23.8847H22.8703C22.3708 23.896 22.121 23.2829 22.473 22.931Z"
                fill={theme.color_system.status.error.light}
            />
        </svg>
    );
}
