import { FC, PropsWithChildren } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { Btn, Typography, useTranslationV2 } from "ui";

import { BasicDialogProps } from "./BasicDialog.types";
import { DialogeActionsStyle, DialogStyle2, DialogTitleStyle, titleStyle2 } from "./inlineStyles";

export const BasicDialog: FC<PropsWithChildren<BasicDialogProps>> = ({
    dialogOpen,
    toggleDialog,
    header,
    children,
    leftSideAction,
    rightSideAction,
    showActions = true,
}) => {
    const t = useTranslationV2();

    return (
        <Dialog sx={DialogStyle2} open={dialogOpen} onClose={toggleDialog}>
            {header && (
                <DialogTitle sx={DialogTitleStyle}>
                    <Typography as="span" sx={titleStyle2} variant="h4">
                        {header}
                    </Typography>
                    <IconButton size="small" onClick={toggleDialog} sx={{ mr: 0.7 }}>
                        <ClearIcon />
                    </IconButton>
                </DialogTitle>
            )}

            <DialogContent>{children}</DialogContent>

            {showActions && (
                <DialogActions sx={DialogeActionsStyle}>
                    <Box display="flex" gap={1}>
                        {leftSideAction}
                    </Box>
                    <Box display="flex" gap={1}>
                        <Btn variant="secondary-contained" onClick={toggleDialog}>
                            {t("Cancel")}
                        </Btn>
                        {rightSideAction}
                    </Box>
                </DialogActions>
            )}
        </Dialog>
    );
};
