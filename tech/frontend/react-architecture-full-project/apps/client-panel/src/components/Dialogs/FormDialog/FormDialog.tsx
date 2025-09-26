import { FC, PropsWithChildren } from "react";
import { Form, Formik } from "formik";

import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import { Btn, Typography, useTranslationV2 } from "ui";

import { FormDialogProps } from "./FormDialog.types";
import { DialogeActionsStyle2, DialogStyle2, DialogTitleStyle, titleStyle } from "./inlineStyles";

export const FormDialog: FC<PropsWithChildren<FormDialogProps>> = ({
    dialogOpen,
    toggleDialog,
    header,
    children,
    onSubmit,
    initialValues,
    validationSchema,
    leftSideAction,
    rightSideAction,
    secondRightSideAction,
    validate,
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    return (
        <Dialog sx={DialogStyle2} open={dialogOpen} onClose={toggleDialog}>
            <Formik
                onSubmit={(values) => {
                    onSubmit(values);
                }}
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnBlur={false}
                validateOnChange={false}
                validate={validate}
            >
                <Form noValidate>
                    <DialogTitle sx={DialogTitleStyle}>
                        <Typography
                            component="span"
                            fontWeight="bold"
                            sx={titleStyle}
                            variant="h4"
                            color={theme.color_system.text.primary}
                        >
                            {header}
                        </Typography>
                        <IconButton size="small" onClick={toggleDialog} sx={{ marginRight: 0.7 }}>
                            <ClearIcon />
                        </IconButton>
                    </DialogTitle>

                    <DialogContent sx={{ paddingBottom: theme.spacing(2) }}>{children}</DialogContent>

                    <DialogActions sx={DialogeActionsStyle2}>
                        <Box display="flex" gap={1}>
                            {leftSideAction}
                        </Box>
                        <Box display="flex" gap={1}>
                            {secondRightSideAction || (
                                <Btn type="button" variant="secondary-contained" onClick={toggleDialog}>
                                    {t("Cancel")}
                                </Btn>
                            )}
                            {rightSideAction}
                        </Box>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
};
