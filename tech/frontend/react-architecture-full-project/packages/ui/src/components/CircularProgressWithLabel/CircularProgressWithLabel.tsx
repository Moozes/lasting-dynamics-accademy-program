import CircularProgress, { circularProgressClasses } from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import type { HTMLDivProps } from "ui";

type Props = HTMLDivProps & {
    value: number;
};

export const CircularProgressWithLabel = ({ value, ...props }: Props) => {
    return (
        <div {...props}>
            <CircularProgress
                color="inherit"
                size={82}
                className="circular-progress"
                variant="determinate"
                value={value}
                sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: "round",
                    },
                }}
            />
            <div className="circular-progress-background-container">
                <CircularProgress
                    color="inherit"
                    size={82}
                    className="circular-progress-background"
                    variant="determinate"
                    value={100}
                />
            </div>
            <div className="label-container">
                <Typography variant="body2" className="label">
                    {value}%
                </Typography>
            </div>
        </div>
    );
};
