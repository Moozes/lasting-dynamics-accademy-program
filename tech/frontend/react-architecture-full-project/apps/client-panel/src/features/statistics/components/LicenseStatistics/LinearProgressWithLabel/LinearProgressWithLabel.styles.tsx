import { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import { LinearProgressWithLabel } from "./LinearProgressWithLabel";

export const StyledLinearProgressWithLabel = styled(LinearProgressWithLabel)(
    ({ theme, backgroundColor, progressColor }) => ({
        color: theme.color_system.text.primary,
        "& > .label": {
            textAlign: "right",
            marginBottom: "13.14px",
        },
        [`& > .progress.${linearProgressClasses.root}`]: {
            background: backgroundColor,
            borderRadius: "9px",
            [`& > .${linearProgressClasses.bar}`]: {
                background: progressColor,
                borderRadius: "9px",
                transition: "none",
            },
        },
    })
);
