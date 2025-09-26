import { styled } from "@mui/material/styles";

import { StatusCell } from "./StatusCell";

export const StyledStatusCell = styled(StatusCell)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    "& .status-indicator": {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        transition: "background-color 300ms ease-in-out",
    },
    "& .status-indicator.active": {
        backgroundColor: "#00ff00",
    },
    "& .status-indicator.inactive": {
        backgroundColor: theme.palette.grey[500],
    },
    "& div": {
        fontSize: "0.9rem",
        fontWeight: 500,
    },
}));
