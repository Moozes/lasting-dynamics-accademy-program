import { SVGProps } from "react";

const AlertOctagon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M16.0484 4.78516H31.9574L43.2167 16.0445V31.9535L31.9574 43.2128H16.0484L4.78906 31.9535V16.0445L16.0484 4.78516Z"
                stroke="#F24E1E"
                strokeWidth="3.84277"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 16.3145V24"
                stroke="#F24E1E"
                strokeWidth="3.84277"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 31.6855H24.0192"
                stroke="#F24E1E"
                strokeWidth="3.84277"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AlertOctagon;
