import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import { IMuiTheme } from "../../../layouts/Theme/theme.app";

import { THelperVariant } from "./Helper.app";

export const root = {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 10,
    padding: "2px 8px",
    borderRadius: 8,
};

export const getStatusClass = (theme: IMuiTheme) => ({
    info: {
        color: theme.palette.info.main,
    },
    error: {
        color: theme.palette.error.main,
    },
    warning: {
        color: theme.palette.warning.main,
    },
    success: {
        color: theme.palette.success.main,
    },
});

export const getStatusIcon = (variant: THelperVariant) => {
    switch (variant) {
        case "error":
            return <ErrorOutlineIcon />;
        case "warning":
            return <WarningAmberIcon />;
        case "info":
            return <HelpOutlineIcon />;
        case "success":
            return <CheckCircleOutlineIcon />;
        default:
            return <HelpOutlineIcon />;
    }
};
