import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const ArchiveIcon2 = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg width={94} height={94} viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle opacity="0.1" cx={47} cy={47} r={47} fill={theme.color_system.status.infos.light} />
            <path
                d="M56.584 41.2538C60.7527 41.2768 63.0106 41.4628 64.4826 42.9348C66.1673 44.6195 66.1673 47.3297 66.1673 52.75V54.6667C66.1673 60.0889 66.1673 62.7991 64.4826 64.4838C62.7997 66.1667 60.0877 66.1667 54.6673 66.1667H39.334C33.9137 66.1667 31.2016 66.1667 29.5187 64.4838C27.834 62.7972 27.834 60.0889 27.834 54.6667V52.75C27.834 47.3297 27.834 44.6195 29.5187 42.9348C30.9907 41.4628 33.2486 41.2768 37.4173 41.2538"
                stroke={theme.color_system.status.infos.dark}
                strokeWidth="2.875"
                strokeLinecap="round"
            />
            <path
                d="M47 27.8334V52.75M47 52.75L41.25 46.0417M47 52.75L52.75 46.0417"
                stroke={theme.color_system.status.infos.dark}
                strokeWidth="2.875"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArchiveIcon2;
