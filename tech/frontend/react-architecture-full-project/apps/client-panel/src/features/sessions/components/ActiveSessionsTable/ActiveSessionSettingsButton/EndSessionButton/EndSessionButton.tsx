import { FC, useReducer } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";

import { Avatar, Box, useTheme } from "@mui/material";

import { AlertOctagon, Btn, FilledSquare, Typography, useTranslationV2 } from "ui";

import { WergonicUserError } from "@app-types/index";
import { AlertDialog } from "@components/index";
import { useUpdateSessionMutation } from "@features/sessions/queries";
import { IEndSessionButton } from "@features/sessions/types";
import { TABLE_SETTINGS_MENU_ITEM_PADDING, TABLE_SETTINGS_MENU_ITEM_TEXT_ML } from "@utils/index";

import { ActivateMenuItemStyle2, AlertAvatarStyle2 } from "./inlineStyles";

export const EndSessionButton: FC<IEndSessionButton & { handleMenuClose: () => void }> = ({
    selectedSession,
    handleMenuClose,
}) => {
    const t = useTranslationV2();
    const theme = useTheme();
    const queryClient = useQueryClient();
    const { enqueueSnackbar } = useSnackbar();
    const [isDialogOpen, setIsDialogOpen] = useReducer((state) => {
        return !state;
    }, false);

    const {
        mutate: updateSession,
        isLoading,
        reset,
    } = useUpdateSessionMutation({
        onSuccess: () => {
            if (isDialogOpen) {
                setIsDialogOpen();
                handleMenuClose();
            }
            queryClient.invalidateQueries({
                queryKey: ["sessions"],
            });
            enqueueSnackbar(t("sessions_management.sessions_ending_success"));
            reset();
        },
        onError: (err: WergonicUserError) => {
            let message;
            if (err.response.data?.detail) {
                message = err.response.data?.detail;
            } else {
                message = t("Something_went_Wrong");
            }
            enqueueSnackbar(message, { severity: "error" });
            if (isDialogOpen) {
                setIsDialogOpen();
                handleMenuClose();
            }
        },
    });
    const handleEndSession = () => {
        const date = new Date();
        const data = { id: selectedSession.id, ended_at: date.toISOString() };
        updateSession(data);
    };

    const closeDialog = () => {
        setIsDialogOpen();
        handleMenuClose();
    };

    const workerFullName = `${selectedSession.worker.first_name} ${selectedSession.worker.last_name}`;

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                sx={{ ...ActivateMenuItemStyle2, p: TABLE_SETTINGS_MENU_ITEM_PADDING }}
                onClick={setIsDialogOpen}
            >
                <Box height="19px" width="19px" display="flex" alignItems="center" justifyContent="center">
                    <FilledSquare />
                </Box>

                <Typography
                    ml={TABLE_SETTINGS_MENU_ITEM_TEXT_ML}
                    variant="body1"
                    color={theme.color_system.text.primary}
                >
                    {t("sessions_management.end_session")}
                </Typography>
            </Box>
            <AlertDialog
                dialogOpen={isDialogOpen}
                toggleDialog={closeDialog}
                dialogIcon={
                    <Avatar sx={AlertAvatarStyle2}>
                        <AlertOctagon />
                    </Avatar>
                }
                rightSideAction={
                    <Btn onClick={handleEndSession} loading={isLoading} variant="primary-contained">
                        {t("end")}
                    </Btn>
                }
                primaryText={t("sessions_management.confirm_session_termination")}
                secondaryText={`${t("sessions_management.ending_session_alert")} ${workerFullName}`}
            />
        </>
    );
};
