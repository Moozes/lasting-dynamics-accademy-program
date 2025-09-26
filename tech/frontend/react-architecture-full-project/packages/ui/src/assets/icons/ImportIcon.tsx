import { SVGProps } from "react";

import { useTheme } from "@mui/material";

const ImportIcon = (props: SVGProps<SVGSVGElement>) => {
    const theme = useTheme();
    return (
        <svg width={94} height={94} viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle opacity="0.1" cx={47} cy={47} r={47} fill={theme.color_system.status.infos.light} />
            <g transform="translate(24, 24)">
                <path
                    d="M7.66675 23V38.3333C7.66675 39.35 8.07062 40.325 8.78951 41.0439C9.50839 41.7628 10.4834 42.1667 11.5001 42.1667H34.5001C35.5167 42.1667 36.4918 41.7628 37.2107 41.0439C37.9295 40.325 38.3334 39.35 38.3334 38.3333V23"
                    stroke={theme.color_system.status.infos.dark}
                    strokeWidth="3.83333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M30.6666 11.5007L22.9999 3.83398L15.3333 11.5007"
                    stroke={theme.color_system.status.infos.dark}
                    strokeWidth="3.83333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M23 3.83398V28.7507"
                    stroke={theme.color_system.status.infos.dark}
                    strokeWidth="3.83333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};

export default ImportIcon;
