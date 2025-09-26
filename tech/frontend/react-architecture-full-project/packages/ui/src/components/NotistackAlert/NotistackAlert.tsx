import { forwardRef, useCallback } from "react";
import { closeSnackbar, CustomContentProps, SnackbarContent } from "notistack";

import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertProps, AlertTitle, IconButton, useTheme } from "@mui/material";

import SuccessIcon from "../../assets/icons/AlertIcons/SuccessIcon";
import Typography from "../Typography";

import { AlertCloseButtonStyle, AlertStyle } from "./inlineStyles";

declare module "notistack" {
    interface VariantOverrides {
        default: {
            title?: string;
            severity?: AlertProps["severity"];
        };
    }
}

interface INotistackAlertProps extends CustomContentProps {
    title?: string;
    ActionButton?: React.ReactNode;
    severity?: AlertProps["severity"];
}

export const NotistackAlert = forwardRef<HTMLDivElement, INotistackAlertProps>((props, ref) => {
    const { id, message, severity = "success", title, ActionButton } = props;
    const theme = useTheme();
    const handleDismiss = useCallback(() => {
        closeSnackbar(id);
    }, [id]);
    return (
        <SnackbarContent style={{ paddingRight: theme.spacing(9), marginTop: theme.spacing(-0.5) }} ref={ref}>
            <Alert
                iconMapping={{
                    success: <SuccessIcon />,
                }}
                sx={AlertStyle}
                severity={severity}
                action={
                    ActionButton || (
                        <IconButton onClick={() => handleDismiss()} size="small" sx={AlertCloseButtonStyle}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )
                }
            >
                {title && <AlertTitle>{title}</AlertTitle>}
                <Typography variant="body2">{message}</Typography>
            </Alert>
        </SnackbarContent>
    );
});

NotistackAlert.displayName = "NotistackAlert";
