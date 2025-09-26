import { SxProps, Theme } from "@mui/material";
import { PopoverProps } from "@mui/material/Popover";

export const initialViewStyles = () => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    } as SxProps<Theme>,
    typography: {
        mt: 1,
    } as SxProps<Theme>,
});

export const aiExplanationStyles = (theme: Theme) => ({
    box: {
        border: 1,
        borderColor: theme.color_system.primary.light,
        borderRadius: 2,
        p: 2,
        width: "100%",
        borderWidth: "1px",
    } as SxProps<Theme>,
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
    } as SxProps<Theme>,
    subtitle: {
        display: "flex",
        alignItems: "center",
        color: theme.color_system.text.light,
    } as SxProps<Theme>,
    infoIcon: {
        ml: 1,
    } as SxProps<Theme>,
    toggleButton: {
        color: theme.color_system.button.disabled.text,
        textTransform: "none",
        border: "none",
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
        display: "flex",
        alignItems: "center",
    } as SxProps<Theme>,
    explanationContent: {
        mt: 2,
    } as SxProps<Theme>,
    popoverContent: {
        padding: "15px",
        maxWidth: "255px",
        color: theme.color_system.text.secondary,
        textAlign: "center",
        "&:hover": {
            background: theme.color_system.divider.white,
        },
    } as SxProps<Theme>,
    popoverArrow: {
        position: "absolute",
        width: "10px",
        height: "10px",
        background: theme.color_system.divider.white,
        borderWidth: "1px",
        borderColor: "transparent",
        transform: "rotate(45deg)",
        bottom: "-5px",
        left: "calc(50% - 5px)",
    } as SxProps<Theme>,
});

export const consentRequestStyles = (theme: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(3),
    } as SxProps<Theme>,
    icon: {
        color: theme.color_system.primary.dark,
        marginBottom: theme.spacing(2),
    } as SxProps<Theme>,
    header: {
        marginBottom: theme.spacing(2),
        color: theme.color_system.text.primary,
    } as SxProps<Theme>,
    paragraph: {
        marginBottom: theme.spacing(3),
        color: theme.color_system.text.secondary,
    } as SxProps<Theme>,
    buttonBox: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        gap: "1px",
    } as SxProps<Theme>,
    dismissButton: {
        color: theme.color_system.primary.dark,
        borderColor: theme.color_system.primary.dark,
        width: 100,
    } as SxProps<Theme>,
    confirmButton: {
        backgroundColor: theme.color_system.primary.dark,
        width: 100,
    } as SxProps<Theme>,
});

export const defaultPositionAndPaperProps: Omit<PopoverProps, "open" | "anchorEl" | "onClose"> = {
    anchorOrigin: {
        vertical: "top",
        horizontal: "center",
    },
    transformOrigin: {
        vertical: "bottom",
        horizontal: "center",
    },
    PaperProps: {
        sx: {
            overflow: "visible",
        },
    },
};

export const regenerateReportStyles = (theme: Theme): Record<string, SxProps<Theme>> => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },

    text: {
        ...theme.typography.body2,
        flexGrow: 1,
        color: theme.color_system.text.primary,
    },

    buttonsContainer: {
        display: "flex",
        gap: "16px",
        marginLeft: "32px",
    },

    button: {
        color: theme.color_system.primary.dark,
        borderColor: theme.color_system.primary.light,
    },
});
