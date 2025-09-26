import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

import type { HTMLDivProps } from "ui";

import { normalise } from "@features/statistics/utils";

type Props = HTMLDivProps & {
    min: number;
    max: number;
    backgroundColor: string;
    progressColor: string;
    value: number;
};

export const LinearProgressWithLabel = ({ min, max, value, backgroundColor, progressColor, ...props }: Props) => {
    return (
        <div {...props}>
            <Typography variant="body2" className="label">
                {value}/{max}
            </Typography>
            <LinearProgress className="progress" variant="determinate" value={normalise(value, min, max)} />
        </div>
    );
};
