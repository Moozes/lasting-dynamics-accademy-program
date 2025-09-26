import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useSnackbar } from "notistack";

import { Box, BoxProps, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { Modal, SupportIcon, useTranslationV2 } from "ui";

import * as styles from "../../inlineStyles";

import { useAddNewTicketForm, UseSelectFiles } from "./AddTicketButton.hooks";
import { useAddTicketQuery } from "./AddTicketButton.queries";
import { FormDialogContent } from "./FormDialogContent";

export const AddTicketButton = (props: BoxProps) => {
    const t = useTranslationV2();
    const { enqueueSnackbar } = useSnackbar();
    const queryClient = useQueryClient();
    const [modalOpen, setModalOpen] = useState(false);

    const { newTicketInitialValues, newTicketValidationSchema } = useAddNewTicketForm();

    const { imageFiles, handleImageChange, handleDeleteSelectedFile, clearImageFiles } = UseSelectFiles();

    useEffect(() => {
        clearImageFiles();
    }, [modalOpen]);

    const {
        mutate: addTicket,
        isLoading,
        reset,
    } = useAddTicketQuery({
        imageFiles,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tickets"],
            });
            enqueueSnackbar(t("settings.success_message"));
            reset();
            setModalOpen(false);
        },
        onError: () => {
            const message = t("Something_went_Wrong");
            enqueueSnackbar(message, { severity: "error" });
            setModalOpen(false);
        },
    });

    return (
        <Box {...props}>
            <ListItem disablePadding onClick={() => setModalOpen(true)} sx={{ cursor: "pointer" }}>
                <ListItemButton sx={styles.HelpContainerStyle}>
                    <ListItemIcon sx={styles.SettingsSideBareIconContainerStyle}>
                        <SupportIcon />
                    </ListItemIcon>
                    <ListItemText
                        sx={styles.HelpTextStyle}
                        primary={t("settings.help_text")}
                        secondary={t("settings.secondary_help_text")}
                    />
                </ListItemButton>
            </ListItem>

            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <Formik
                    initialValues={newTicketInitialValues}
                    validationSchema={newTicketValidationSchema}
                    onSubmit={(values) => {
                        addTicket(values);
                    }}
                >
                    <Form>
                        <FormDialogContent
                            imageFiles={imageFiles}
                            handleImageChange={handleImageChange}
                            handleDeleteSelectedFile={handleDeleteSelectedFile}
                            isMutationLoading={isLoading}
                        />
                    </Form>
                </Formik>
            </Modal>
        </Box>
    );
};
