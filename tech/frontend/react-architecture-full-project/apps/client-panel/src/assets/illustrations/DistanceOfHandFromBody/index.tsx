import { HTMLProps } from "react";

import { useTheme } from "@mui/material";

import distanceOfHandFromBodyDark from "./distanceOfHandFromBodyDark.png";
import distanceOfHandFromBodyLigh from "./distanceOfHandFromBodyLight.png";

type Props = HTMLProps<HTMLImageElement>;

export const DistanceOfHandFromBody = (props: Props) => {
    const mode = useTheme().palette.mode;
    return (
        <img
            src={mode == "dark" ? distanceOfHandFromBodyDark : distanceOfHandFromBodyLigh}
            alt="distance of hand from body illustration"
            {...props}
        />
    );
};
