import { styled } from "@mui/material/styles";

import { LinkedSensors } from "./LinkedSensors";

export const StyledLinkedSensors = styled(LinkedSensors)(({ theme }) => ({
    color: theme.color_system.text.primary,
    "& .linked-sensors": {
        width: 600,
        padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > .text": {
            marginBottom: 24,
            textAlign: "left",
            "& > .title": {
                ...theme.typography.h4,
                marginBottom: 8,
            },
        },
        "& .sensors-table-container": {
            width: "100%",
            marginBottom: 24,
            "& .MuiTable-root": {
                borderCollapse: "collapse",
            },
            "& .MuiTableCell-root": {
                padding: "10px 16px",
            },
        },
    },
}));
