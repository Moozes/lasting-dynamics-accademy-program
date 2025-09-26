import { styled } from "@mui/material/styles";

import { WorkerCell } from "./WorkerCell";

export const StyledWorkerCell = styled(WorkerCell)(({ theme }) => ({
    color: theme.color_system.text.primary,
    display: "flex",
    alignItems: "center",
    gap: 10,
    "& > .worker-name": {},
    "& > .events": {
        display: "flex",
        alignItems: "center",
        gap: 5,
        "& > .event": {
            padding: "3px 10px",
            borderRadius: "0 20px 20px 0",
            "&._0": {
                background: theme.color_system.status.warning.light_light,
                color: theme.color_system.status.warning.dark,
                "& svg": {
                    color: theme.color_system.status.warning.dark,
                },
            },
            "&._1": {
                background: theme.color_system.status.error.light_light,
                color: theme.color_system.status.error.light,
                "& svg": {
                    color: theme.color_system.status.error.light,
                },
            },
            "&._2": {
                background: theme.color_system.divider.light_grey,
                color: theme.color_system.text.light,
                "& svg": {
                    color: theme.color_system.text.light,
                },
            },
            "&._3": {
                background: theme.color_system.status.success.light_light,
                color: theme.color_system.status.success.dark,
                "& svg": {
                    color: theme.color_system.status.success.dark,
                },
            },
        },
    },
}));
