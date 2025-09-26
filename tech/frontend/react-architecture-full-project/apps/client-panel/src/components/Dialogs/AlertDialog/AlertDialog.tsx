import { FC } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, useTheme } from "@mui/material";

import { Btn, Typography, useTranslationV2 } from "ui";

import { AlertDialogProps } from "./AlertDialog.types";
import { DialogActionsStyle, DialogStyle2, DialogTitleStyle, IconButtonStyle } from "./inlineStyles";

export const AlertDialog: FC<AlertDialogProps> = ({
    dialogOpen,
    toggleDialog,
    dialogIcon,
    primaryText,
    secondaryText,
    rightSideAction,
    showCancelButton = true,
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    return (
        <Dialog sx={DialogStyle2} open={dialogOpen} onClose={toggleDialog}>
            <DialogTitle sx={DialogTitleStyle}>
                <IconButton size="small" onClick={toggleDialog} sx={IconButtonStyle}>
                    <ClearIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box flexGrow={1} display="flex" flexDirection="column" alignItems="center">
                    <Box mb="28px">{dialogIcon}</Box>
                    <Typography mb="26px" variant="h4" weight="bold" color={theme.color_system.primary.dark}>
                        {primaryText}
                    </Typography>
                    <Typography mb="24px" textAlign="center" variant="body1" color={theme.color_system.text.primary}>
                        {secondaryText}
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions sx={DialogActionsStyle}>
                <Box display="flex" gap={1}>
                    {showCancelButton && (
                        <Btn variant="secondary-contained" onClick={toggleDialog} type="button">
                            {t("Cancel")}
                        </Btn>
                    )}
                    {rightSideAction}
                </Box>
            </DialogActions>
        </Dialog>
    );
};
